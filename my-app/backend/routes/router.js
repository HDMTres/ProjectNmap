import express from "express"
import { spawn } from "child_process"
import modelResult from "../db/models/model.js"


const router = express.Router()

router.post("/router", (req, res) => {
    const { requete, ipAddress, scanOption, optionalOption } = req.body

    const preuve = [requete, ipAddress, scanOption, optionalOption]
    const process = spawn("nmap", preuve)

    let blocresult = ""

    process.stdout.on("data", (data) => {
        blocresult += data.toString()
    })

    process.on("close", (code) => {
        if (code === 0) {
            const command = new modelResult({
                requete: requete,
                ipAddress: ipAddress,
                scanOption: scanOption,
                optionalOption: optionalOption,
                resultScan: blocresult,
                dateNow: new Date(),
            })

            command
                .save()
                .then((savedData) => {
                    res.json(savedData)
                })
                .catch((error) => {
                    console.error("Erreur d'enregistrement", error)
                    res.status(500).send("Erreur")
                })
        } else {
            res.status(500).send("Erreur Nmap")
        }
    })
})

// { GET HISTORIQUE }
router.get("/router", async (req, res) => {
    try {
        const historique = await modelResult.find()
        res.json(historique)
    } catch (error) {
        console.error("Erreur Historique", error)
        res.status(500).send("Erreur")
    }
})


// { DELETE HISTORIQUE } a faire.....
router.delete("/router/:id", async (req, res) => {
    try {
        const id = req.params.id
        await modelResult.findByIdAndDelete(id)
        res.send("Bien supprimer")
    } catch (error) {
        console.error("Erreur lors de la tentative de suppression :", error)
        res.status(500).send("Erreur")
    }
})
  

export default router
