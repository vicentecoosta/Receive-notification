<h1><b> Coleta de notificações de mensagens ativas 🚀</b></h1>

<h3><b>Descrição</b></h3> 
Este projeto é uma API Node.js que se conecta ao Blip e recebe notificações. 
Ele usa o <b>Blip SDK e o WebSocket</b> para estabelecer uma conexão em tempo real com o Blip e registrar um listener para <b>notificações recebidas</b>.

<h3><b>Pré-requisitos</b></h3> 
<a href="https://nodejs.org/pt"> Node.js<a/> (versão 12 ou superior)<br>
<a href="https://www.npmjs.com"> Npm <a/> (gerenciador de pacotes do Node.js)

<h3><b>Instalação</b></h3>
<h4>1. Clone o repositório </h4> 
git clone https://github.com/Receive-notification

<h4>2. Navegue até a pasta do projeto </h4> 
cd Receive-notification

<h4>3. Instale as dependências:</h4> 
npm install express blip-sdk lime-transport-websocket

<h3><b>Uso</b></h3> 
<h4>1. Configure as credenciais do Blip: </h4> 
Abra o arquivo `index.js` e substitua os valores de `IDENTIFIER` e `ACCESS_KEY` pelas suas credenciais do Blip.<br><br>
    <b>const IDENTIFIER = "seu-identifier"; // Substitua pelo seu identificador<br>
    const ACCESS_KEY = "seu-access-key"; // Substitua pela sua chave de acesso<br></b>

<h4>2. Execute a API: </h4> 
npm start

A API estará rodando em http://localhost:3000.

<h3><b>Configuração</b></h3> 
<b>PORT:</b> A porta em que a API será executada. O padrão é 3000. Você pode alterar a porta definindo a variável de ambiente PORT.

