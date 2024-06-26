const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')

function createMainWindow() {


    const mainWindow = new BrowserWindow({
        title: 'Text Mate',
        width: 500,
        height: 600,
        icon: './renderer/assets/logo.ico'
    })

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
}

//open the window by calling the function
app.whenReady().then(function(){

    //customize menu
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    createMainWindow()
})

//menu
const menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click: () => app.quit(),
                accelerator: 'CmdOrCtrl+W'
            }
        ]
    }
]