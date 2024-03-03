const ws = require('nodejs-websocket')
var server = ws.createServer((conn)=>{
    conn.on("text", function(str){
        // conn.sendText(str)
        boardcast(str)
    })
    // setTimeout(()=>{
    //     conn.sendText("hi")
    // }, 3000)
    conn.on("error", (err)=>{
        console.error(err)
    })
}).listen(2333, ()=>{
    console.log('ws://localhost:2333')
})

function boardcast(str){
    server.connections.forEach(item => {
        item.sendText(str)
    })
}