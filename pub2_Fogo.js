import mqtt from "mqtt";

// HiveMQ Cloud
const hive = mqtt.connect("mqtts://3abdfe0bbb5346db8e6ce05fc4cfd469.s1.eu.hivemq.cloud:8883", {
  clientId: "sensor_fogo_hive_" + Math.random().toString(16).slice(2),
  username: "murilo",
  password: "Murilo1!",
  clean: true,
  will: {
    topic: "Fogo/status",
    payload: "Sensor FOGO desconectado inesperadamente - HiveMQ",
    qos: 2,
    retain: true
  }
});

// Mosquitto local
const mosquitto = mqtt.connect("mqtt://localhost:1883", {
  clientId: "sensor_fogo_mosquitto_" + Math.random().toString(16).slice(2),
  clean: true,
  will: {
    topic: "Fogo/status",
    payload: "Sensor FOGO desconectado inesperadamente - Mosquitto",
    qos: 2,
    retain: true
  }
});

hive.on("connect", () => {
  console.log("Conectado ao HiveMQ Cloud");
});

mosquitto.on("connect", () => {
  console.log("Conectado ao Mosquitto local");
});

setInterval(() => {
  const detectouFogo = Math.random() < 0.5;

  const mensagem = detectouFogo ? "FOGO DETECTADO" : "Sem fogo";

  hive.publish("Fogo/qos", mensagem, { qos: 2 });
  mosquitto.publish("Fogo/qos", mensagem, { qos: 2 });

  console.log("Mensagem enviada:", mensagem);
}, 5000);

hive.on("error", (err) => {
  console.error("Erro HiveMQ:", err.message);
});

mosquitto.on("error", (err) => {
  console.error("Erro Mosquitto:", err.message);
});