const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    let resp = ''
    ws.on('message', (message) => {
        console.log(`received message: ${message}`)
        setTimeout(() => {
            ws.send(`Server have got the message: ${message}`)
        }, 3000 )
    })

})