const mqtt = require("mqtt")
const client = mqtt.connect(`tcp://localhost:1883`, {
  clean: true,
  connectTimeout: 3000,
  // username: 'ecu',
  // password: '1234',
  reconnectPeriod: 1000,
})

let A1 = {}
let A2 = {}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

client.on("connect", () => {
  console.log("Connected")

  client.subscribe("A1")
  client.subscribe("A2")
})

client.on("error", function (error) {
  console.log("ERROR: ", error)
})

client.on("offline", function () {
  console.log("offline")
})

client.on("reconnect", function () {
  console.log("reconnect")
})

setInterval(() => {
  A1.WET_OVEN_RH = getRandomArbitrary(8, 77).toFixed(4)
  A1.WET_OVEN_RH_2 = getRandomArbitrary(15, 80).toFixed(4)
  A1.LATEX_TANK_1_SIDE_B = getRandomArbitrary(21, 38).toFixed(4)
  A1.LN_TANK = getRandomArbitrary(27, 56).toFixed(4)
  A1.COAGULANT_OVEN_1 = getRandomArbitrary(30, 104).toFixed(4)
  A1.RINSING_TANK_2 = getRandomArbitrary(30, 62).toFixed(4)
  A1.WET_OVEN_4 = getRandomArbitrary(30, 112).toFixed(4)
  A1.COAGULANT_OVEN_2 = getRandomArbitrary(29, 104).toFixed(4)
  A1.WET_OVEN_1 = getRandomArbitrary(31, 112).toFixed(4)
  A1.WET_OVEN_3 = getRandomArbitrary(30, 112).toFixed(4)
  client.publish(
    "A1",
    JSON.stringify(A1),
    // { qos: 0, retain: false },
    (error) => {
      if (error) {
        console.error(error)
      }
    }
  )
  console.log("payload1: ", A1)
}, 1000)

setInterval(() => {
  A2.WET_OVEN_RH = getRandomArbitrary(8, 77).toFixed(4)
  A2.WET_OVEN_RH_2 = getRandomArbitrary(15, 80).toFixed(4)
  A2.LATEX_TANK_1_SIDE_B = getRandomArbitrary(21, 38).toFixed(4)
  A2.LN_TANK = getRandomArbitrary(27, 56).toFixed(4)
  A2.COAGULANT_OVEN_1 = getRandomArbitrary(30, 104).toFixed(4)
  A2.RINSING_TANK_2 = getRandomArbitrary(30, 62).toFixed(4)
  A2.WET_OVEN_4 = getRandomArbitrary(30, 112).toFixed(4)
  A2.COAGULANT_OVEN_2 = getRandomArbitrary(29, 104).toFixed(4)
  A2.WET_OVEN_1 = getRandomArbitrary(31, 112).toFixed(4)
  A2.WET_OVEN_3 = getRandomArbitrary(30, 112).toFixed(4)
  client.publish(
    "A2",
    JSON.stringify(A2),
    // { qos: 0, retain: false },
    (error) => {
      if (error) {
        console.error(error)
      }
    }
  )
  console.log("payload2: ", A2)
}, 1000)
