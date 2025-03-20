const express = require('express');
const BlipSdk = require('blip-sdk');
const WebSocketTransport = require('lime-transport-websocket'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Credenciais do seu bot no Blip
const IDENTIFIER = "seu-identifier"; // Substitua pelo seu identificador
const ACCESS_KEY = "seu-access-key"; // Substitua pela sua chave de acesso

let client;

try {
    const ClientBuilder = BlipSdk.ClientBuilder;

    if (ClientBuilder) {
        client = new ClientBuilder()
            .withIdentifier(IDENTIFIER)
            .withAccessKey(ACCESS_KEY)
            .withTransportFactory(() => new WebSocketTransport()) 
            .build();

        client.connect()
            .then(() => {
                console.log("Conectado ao Blip! Aguardando notificações...");

                client.addNotificationReceiver(true, notification => {
                    console.log(`Notificação recebida: ${notification.event} - De: ${notification.from}`);
                });
            })
            .catch(err => console.error("Erro ao conectar:", err));
    } else {
        console.error("ClientBuilder não encontrado. Verifique a importação do blip-sdk.");
    }
} catch (error) {
    console.error("Erro ao criar o cliente:", error);
}

app.get("/", (req, res) => {
    res.send("🚀 API do Blip rodando com sucesso!");
});

app.listen(PORT, () => {
    console.log(`🌐 Servidor rodando em http://localhost:${PORT}`);
});
