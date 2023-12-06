import Application from '@webex/embedded-app-sdk';
const app = new Application();

app.onReady().then(() => {
    log('onReady()', { message: 'host app is ready' })
    app.listen().then(() => {
       app.on('sidebar:callStateChanged', (call) => log("Call state changed. New call object:", call));
    })
 });