import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/router.js"

dotenv.config()

const app = express()

// Configuration de CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
}

app.use(cors(corsOptions))
app.use(express.json())

// Connection à la base de données
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connecté à la base de données")
    } catch (error) {
        console.log("Erreur lors de la connexion à la base de données : ", error)
    }
}

connectToDatabase().then(() => {
    // Routes
    app.use(router)
    

    // Démarrage du serveur
    const PORT = process.env.PORT || 3006
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`)
    })
})
