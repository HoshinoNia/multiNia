// const remote = require('electron').remote;
// レンダラープロセス（ウェブページ）
const {
    ipcRenderer
} = require('electron');
ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // "pong"を表示
})

function ipcSend() {
    ipcRenderer.send('asynchronous-message', 'ping') //  channel名は「asynchronous-message」
}