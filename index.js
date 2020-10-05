// const remote = require('electron').remote;
// レンダラープロセス（ウェブページ）
// const {
//     ipcRenderer
// } = require('electron');
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//     console.log(arg) // "pong"を表示
// })

window.onload = () => {
    document.getElementById('btn-yt').addEventListener('click', async () => {
        const result = await window.api.newWindow("ipc-newWindow");
        // if (result === true) {
        //     document.getElementById('button-reset').textContent = "停止";
        // } else {
        //     document.getElementById('button-reset').textContent = "リセット";
        // }
    });
}


// function ipcSend() {
//     ipcRenderer.send('asynchronous-message', 'ping') //  channel名は「asynchronous-message」
// }