const app = new Application();

log('App starting')

app.onReady().then(() => {
    log('onReady()', { message: 'host app is ready' })
    app.listen().then(() => {
       app.on('sidebar:callStateChanged', (call) => log("Call state changed. New call object:", call));
    })
 });