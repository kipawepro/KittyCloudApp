const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true,
      partition: 'persist:kittycloud',
    },
    frame: true,
    resizable: true,
    icon: __dirname + '/assets/logo.ico',
});
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    setTimeout(() => {
        mainWindow.loadURL('https://auth.openai.com/authorize?client_id=TdJIcbe16WoTHtN95nyywh5E4yOo6ItG&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20organization.write&response_type=code&redirect_uri=https%3A%2F%2Fchatgpt.com%2Fapi%2Fauth%2Fcallback%2Flogin-web&audience=https%3A%2F%2Fapi.openai.com%2Fv1&device_id=8f0f546e-e862-4c0c-9a1f-6dcb6245fa2d&prompt=login&screen_hint=login&ext-oai-did=8f0f546e-e862-4c0c-9a1f-6dcb6245fa2d&country_code=FR&state=OWO0N7DpgRAfqXhSrEeyRDGJmQrz-5H3Begnzkyi5hk&code_challenge=Sst_PnHGMlkJA8Z0h-QDYzkiG5q3Da-8tHSqBMgfEqE&code_challenge_method=S256');
      }, 1000);

  Menu.setApplicationMenu(null);
});
