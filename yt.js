window.onload = () => {
    document.getElementById('btn-yt').addEventListener('click', async () => {
        const result = await window.api.newWindow("ipc-newWindow");
        // if (result === true) {
        //     document.getElementById('button-reset').textContent = "停止";
        // } else {
        //     document.getElementById('button-reset').textContent = "リセット";
        // }
    });
    document.getElementById('btn-close').addEventListener('click', function () {
        window.close();
    });
}


// function ipcSend() {
//     ipcRenderer.send('asynchronous-message', 'ping') //  channel名は「asynchronous-message」
// }