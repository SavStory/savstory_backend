import express from "express"
import http from "http"
import chalk from "chalk"
import mongoose from "mongoose"
import dotenv from "dotenv"
import logger from "morgan"

dotenv.config()
const app = express()

const PORT = process.env.PORT || 3000
const server = http.createServer(app)


app.use(logger("dev"))

async function main() {
    if (process.env.CONNECTION_STRING) {
       await mongoose.connect(process.env.CONNECTION_STRING)
       console.log(chalk.greenBright("-- database connected"))
    }

    server.listen(PORT,() => {
        console.log(chalk.greenBright(`-- server running on port: ${PORT}`))
    })
    
    server.on("error", error => {
        console.log(chalk.redBright("-- error starting server: ", error.message))
    })
}


main().catch(err => {
    console.log(chalk.redBright(err.message))
}) 