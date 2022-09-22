const mqtt = require("mqtt")
const express = require("express")
const path = require("path")
// var cors = require("cors")
// const axios = require("axios")
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

var load = { test_data: [] }
var load1 = { test_data: [] }
var load2 = { test_data: [] }

var loadA = { test_data: [] }
var loadA1 = { test_data: [] }
var loadA2 = { test_data: [] }

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
        await client.emit("e", load)
        console.log("load: ", load)
        load.test_data.length = 0
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
        await client.emit("e1", load1)
        console.log("load1: ", load1)
        load1.test_data.length = 0
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
        await client.emit("e2", load2)
        console.log("load2: ", load2)
        load2.test_data.length = 0
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
        console.log("loadA: ", loadA)
        await client.emit("eA", loadA)
        loadA.test_data.length = 0
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
        console.log("loadA1: ", loadA1)
        await client.emit("eA1", loadA1)
        loadA1.test_data.length = 0
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
        console.log("loadA2: ", loadA2)
        await client.emit("eA2", loadA2)
        loadA2.test_data.length = 0
      }
    }
  })

  client.on("disconnect", () => {
    mqtt_client.unsubscribe("A1")
    mqtt_client.unsubscribe("A2")
    console.log("Client disconnected")
  })
})
