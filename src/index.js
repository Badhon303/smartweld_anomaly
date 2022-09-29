const mqtt = require("mqtt")
const express = require("express")
const path = require("path")
// var cors = require("cors")
const axios = require("axios")
// const mongoose = require("mongoose")
// const ucllclRouter = require("./routes/ucllclRoutes.js")

const port = 3000
const app = express()

const staticPath = path.join(__dirname, "../public")

app.use(express.json())
// app.use(
//   cors({
//     origin: "*",
//   })
// )

// mongoose.connect(
//   "mongodb+srv://badhon:asdfgh11@cluster0.srzqh.mongodb.net/UCLLCL?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) throw err
//     console.log("Connected to MongoDB!!!")
//   }
// )

// app.use(ucllclRouter)

app.use(express.static(staticPath))
app.get("/level", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/templates/level.html"))
})

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`)
})

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
})

var previousValue = ""
var previousValue1 = ""
var previousValue2 = ""

var previousValueA = ""
var previousValueA1 = ""
var previousValueA2 = ""

// var sortedDate

var load = { test_data: [] }
var load1 = { test_data: [] }
var load2 = { test_data: [] }

var loadA = { test_data: [] }
var loadA1 = { test_data: [] }
var loadA2 = { test_data: [] }

let anomaly_data = []
let anomaly_data1 = []
let anomaly_data2 = []
// let anomaly_data3 = []
// let anomaly_data4 = []
// let anomaly_data5 = []
// let anomaly_data6 = []
// let anomaly_data7 = []
// let anomaly_data8 = []
// let anomaly_data9 = []

let anomaly_dataA = []
let anomaly_dataA1 = []
let anomaly_dataA2 = []

io.on("connection", (client) => {
  console.log("Connected", client)

  // client.on("B_Topic", (arg) => {
  // const mqtt_client = mqtt.connect(`mqtt://iot.msfmqttbroker.com:1883`, {
  const mqtt_client = mqtt.connect(`tcp://localhost:1883`, {
    clean: true,
    connectTimeout: 3000,
    // username: "ecu",
    // password: "1234",
    reconnectPeriod: 1000,
  })

  mqtt_client.unsubscribe("A1")
  mqtt_client.unsubscribe("A2")

  mqtt_client.subscribe("A1")
  mqtt_client.subscribe("A2")

  mqtt_client.on("error", function (error) {
    console.log("ERROR: ", error)
  })

  mqtt_client.on("offline", function () {
    console.log("offline")
  })

  mqtt_client.on("reconnect", function () {
    console.log("reconnect")
  })

  // async function getUnique(array) {
  //   var uniqueArray = []

  //   // Loop through array values
  //   for (i = 0; i < array.length; i++) {
  //     if (uniqueArray.indexOf(array[i].timestamp) === -1) {
  //       uniqueArray.push(array[i])
  //     }
  //   }
  //   return uniqueArray
  // }

  mqtt_client.on("message", async (topic, payload) => {
    let date = new Date()
    if (topic == "A1") {
      let stream = JSON.parse(payload)
      console.log("Received Message:", topic, stream)
      await client.emit("event", stream)
      if (load.test_data.length <= 120) {
        let currentValue = stream.WET_OVEN_RH
        if (previousValue === currentValue) {
          console.log("same data")
        } else {
          load.test_data.push({
            timestamp: date.toISOString().split(".")[0],
            WET_OVEN_RH: Number(currentValue),
          })
          previousValue = currentValue
        }
      } else if (load.test_data.length == 121) {
        load.test_data = load.test_data.sort((a, b) => {
          return a.timestamp.localeCompare(b.timestamp)
        })
        await axios
          .post("http://150.230.175.38:9000/A01/WET_OVEN_RH", load)
          .then(async (res) => {
            for (let i = 0; i < load.test_data.length; i++) {
              anomaly_data.push(
                // Date.parse(res.data[i]["timestamp"]) + 6 * 3600 * 1000 - 120000,
                res.data[i]["anomaly_score"]
              )
            }
            if (anomaly_data.length == 121) {
              // console.log(anomaly_data)
              // anomaly_data = anomaly_data.sort(async (a, b) => {
              //   return a.timestamp.localeCompare(b.timestamp)
              // })
              await client.emit("e", anomaly_data)
            }
            anomaly_data = []
            load.test_data.length = 0
          })
          .catch((err) => {
            console.log("error")
            anomaly_data = []
            load.test_data.length = 0
          })
        // console.log("payload: ", load)
      }
      if (load1.test_data.length <= 120) {
        let currentValue1 = stream.WET_OVEN_RH_2
        if (previousValue1 === currentValue1) {
          console.log("same data")
        } else {
          load1.test_data.push({
            timestamp: date.toISOString().split(".")[0],
            WET_OVEN_RH_2: Number(currentValue1),
          })
          previousValue1 = currentValue1
        }
      } else if (load1.test_data.length == 121) {
        load1.test_data = load1.test_data.sort((a, b) => {
          return a.timestamp.localeCompare(b.timestamp)
        })
        await axios
          .post("http://150.230.175.38:9000/A01/WET_OVEN_RH_2", load1)
          .then(async (res) => {
            for (let i = 0; i < load1.test_data.length; i++) {
              anomaly_data1.push(
                // Date.parse(res.data[i]["timestamp"]) + 6 * 3600 * 1000 - 120000,
                res.data[i]["anomaly_score"]
              )
            }
            if (anomaly_data1.length == 121) {
              // anomaly_data1 = anomaly_data1.sort(async (a, b) => {
              //   return a.timestamp.localeCompare(b.timestamp)
              // })
              await client.emit("e1", anomaly_data1)
            }
            anomaly_data1 = []
            load1.test_data.length = 0
          })
          .catch((err) => {
            anomaly_data1 = []
            load1.test_data.length = 0
            console.log(err)
          })
      }
      if (load2.test_data.length <= 120) {
        let currentValue2 = stream.LATEX_TANK_1_SIDE_B
        if (previousValue2 === currentValue2) {
          console.log("same data")
        } else {
          load2.test_data.push({
            timestamp: date.toISOString().split(".")[0],
            LATEX_TANK_1_SIDE_B: Number(currentValue2),
          })
          previousValue2 = currentValue2
        }
      } else if (load2.test_data.length == 121) {
        load2.test_data = load2.test_data.sort((a, b) => {
          return a.timestamp.localeCompare(b.timestamp)
        })
        await axios
          .post("http://150.230.175.38:9000/A01/LATEX_TANK_1_SIDE_B", load2)
          .then(async (res) => {
            for (let i = 0; i < load2.test_data.length; i++) {
              anomaly_data2.push(
                // Date.parse(res.data[i]["timestamp"]) + 6 * 3600 * 1000 - 120000,
                res.data[i]["anomaly_score"]
              )
            }
            if (anomaly_data2.length == 121) {
              // anomaly_data2 = anomaly_data2.sort(async (a, b) => {
              //   return a.timestamp.localeCompare(b.timestamp)
              // })
              await client.emit("e2", anomaly_data2)
            }
            anomaly_data2 = []
            load2.test_data.length = 0
          })
          .catch((err) => {
            anomaly_data2 = []
            load2.test_data.length = 0
            console.log("error")
          })
      }
    }
    if (topic == "A2") {
      let stream = JSON.parse(payload)
      console.log("Received Message:", topic, stream)
      await client.emit("event1", stream)
      if (loadA.test_data.length <= 120) {
        let currentValue = stream.WET_OVEN_RH
        if (previousValueA === currentValue) {
          console.log("same data")
        } else {
          loadA.test_data.push({
            timestamp: date.toISOString().split(".")[0],
            WET_OVEN_RH: Number(currentValue),
          })
          previousValueA = currentValue
        }
      } else if (loadA.test_data.length == 121) {
        loadA.test_data = loadA.test_data.sort((a, b) => {
          return a.timestamp.localeCompare(b.timestamp)
        })
        await axios
          .post("http://150.230.175.38:9000/A02/WET_OVEN_RH", loadA)
          .then(async (res) => {
            for (let i = 0; i < loadA.test_data.length; i++) {
              anomaly_dataA.push(
                // Date.parse(res.data[i]["timestamp"]) + 6 * 3600 * 1000 - 120000,
                res.data[i]["anomaly_score"]
              )
            }
            if (anomaly_dataA.length == 121) {
              // anomaly_dataA = anomaly_dataA.sort(async (a, b) => {
              //   return a.timestamp.localeCompare(b.timestamp)
              // })
              await client.emit("eA", anomaly_dataA)
            }
            anomaly_dataA = []
            loadA.test_data.length = 0
          })
          .catch((err) => {
            anomaly_dataA = []
            loadA.test_data.length = 0
            console.log("error")
          })
      }
      if (loadA1.test_data.length <= 120) {
        let currentValue1 = stream.WET_OVEN_RH_2
        if (previousValueA1 === currentValue1) {
          console.log("same data")
        } else {
          loadA1.test_data.push({
            timestamp: date.toISOString().split(".")[0],
            WET_OVEN_RH_2: Number(currentValue1),
          })
          previousValueA1 = currentValue1
        }
      } else if (loadA1.test_data.length == 121) {
        loadA1.test_data = loadA1.test_data.sort((a, b) => {
          return a.timestamp.localeCompare(b.timestamp)
        })
        await axios
          .post("http://150.230.175.38:9000/A02/WET_OVEN_RH_2", loadA1)
          .then(async (res) => {
            for (let i = 0; i < loadA1.test_data.length; i++) {
              anomaly_dataA1.push(
                // Date.parse(res.data[i]["timestamp"]) + 6 * 3600 * 1000 - 120000,
                res.data[i]["anomaly_score"]
              )
            }
            if (anomaly_dataA1.length == 121) {
              // anomaly_dataA1 = anomaly_dataA1.sort(async (a, b) => {
              //   return a.timestamp.localeCompare(b.timestamp)
              // })
              await client.emit("eA1", anomaly_dataA1)
            }
            anomaly_dataA1 = []
            loadA1.test_data.length = 0
          })
          .catch((err) => {
            anomaly_dataA1 = []
            loadA1.test_data.length = 0
            console.log("error")
          })
      }
      if (loadA2.test_data.length <= 120) {
        let currentValue2 = stream.LATEX_TANK_1_SIDE_B
        if (previousValueA2 === currentValue2) {
          console.log("same data")
        } else {
          loadA2.test_data.push({
            timestamp: date.toISOString().split(".")[0],
            LATEX_TANK_1_SIDE_B: Number(currentValue2),
          })
          previousValueA2 = currentValue2
        }
      } else if (loadA2.test_data.length == 121) {
        loadA2.test_data = loadA2.test_data.sort((a, b) => {
          return a.timestamp.localeCompare(b.timestamp)
        })
        await axios
          .post("http://150.230.175.38:9000/A02/LATEX_TANK_1_SIDE_B", loadA2)
          .then(async (res) => {
            for (let i = 0; i < loadA2.test_data.length; i++) {
              anomaly_dataA2.push(
                // Date.parse(res.data[i]["timestamp"]) + 6 * 3600 * 1000 - 120000,
                res.data[i]["anomaly_score"]
              )
            }
            if (anomaly_dataA2.length == 121) {
              // anomaly_dataA2 = anomaly_dataA2.sort(async (a, b) => {
              //   return a.timestamp.localeCompare(b.timestamp)
              // })
              await client.emit("eA2", anomaly_dataA2)
            }
            anomaly_dataA2 = []
            loadA2.test_data.length = 0
          })
          .catch((err) => {
            anomaly_dataA2 = []
            loadA2.test_data.length = 0
            console.log("error")
          })
      }
    }
  })

  client.on("disconnect", () => {
    mqtt_client.unsubscribe("A1")
    mqtt_client.unsubscribe("A2")
    console.log("Client disconnected")
  })
})
