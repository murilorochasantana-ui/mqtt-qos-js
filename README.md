# mqtt-qos-js

O Last Will (LWT) é uma forma de avisar quando um cliente “cai” inesperadamente.
Quando um cliente conecta no broker, ele pode deixar configurada uma mensagem. Se esse cliente perder a conexão de forma inesperada, o broker envia essa mensagem automaticamente em um tópico.
É usado em sistemas com sensores ou dispositivos conectados, porque ajuda a identificar rapidamente quando algo parou de funcionar, mesmo sem o cliente conseguir avisar por conta própria.

A retain flag serve para guardar a última mensagem enviada em um tópico.
Quando um publisher envia uma mensagem com o retain = true, o broker salva essa mensagem. Depois, sempre que um novo cliente se inscreve nesse tópico, ele já recebe essa última mensagem na hora.
Por exemplo: um sensor publica “online” com retain, qunado alguém conecte depois, já vai saber que o sensor está online sem precisar esperar uma nova mensagem.