import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("Sensor Incêndio conectado");

  setInterval(() => {
    const detectouFogo = Math.random() < 0.5;

    if (detectouFogo) {
      client.publish("Fogo/qos", "FOGO DETECTADO", { qos: 2 });
      console.log("ALERTA: FOGO DETECTADO!");
    } else {
      console.log("Sem incêndio...");
    }
  }, 5000);
});