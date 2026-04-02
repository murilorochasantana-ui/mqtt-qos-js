import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("Sensor Água conectado");

  setInterval(() => {
    // nível aleatório entre 0% e 100%
    const nivel = (Math.random() * 100).toFixed(1);

    client.publish("Agua/qos", nivel, { qos: 1 });

    console.log("Nível de água:", nivel + "%");
  }, 3000); // a cada 30 segundos
});