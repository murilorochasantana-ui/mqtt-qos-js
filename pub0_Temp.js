import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("Sensor conectado");

  setInterval(() => {
    // temperatura aleatória entre 20 e 35
    const temperatura = (Math.random() * (35 - 20) + 20).toFixed(2);

    // publica só o valor (string simples)
    client.publish("Temp/qos", temperatura, { qos: 0 });

    // mostra no console
    console.log("Temperatura: C°",temperatura);
  }, 1000);
});