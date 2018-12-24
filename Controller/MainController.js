var MainView = require('../View/MainView')

module.exports = function(){
    var run = true

   // while(run) {
        var input = MainView.MainMenu()
        console.log("Input received: " + input)
        if (input === 'q') {
            run = false
        } else if (input === '1') {
            console.log("Display questions menu")

        } else if (input === '2') {
            console.log("Display student menu")
        }

   // }
}