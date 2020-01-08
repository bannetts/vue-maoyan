const path = require("path")
module.exports = {
    devServer: {
        "/api":{
            target:"http://39.97.33.178",
            changeOrigin:true
        }
    },
    configureWebpack:{
        alias:{
            "@":path.join(__dirname,"./src"),
            "@api":path.join(__dirname,"./assets"),
            "@assets":path.join(__dirname,"./assets"),
            "@common":path.join(__dirname,"./common"),
            "@components":path.join(__dirname,"./components"),
            "@pages":path.join(__dirname,"./pages"),
            "@router":path.join(__dirname,"./router"),
            "@store":path.join(__dirname,"./store"),
            "@utils":path.join(__dirname,"./utils"),
        }
    }
}