import React, { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "@/components/Navbar"

function Detail() {
    const [historique, setHistorique] = useState([])

    useEffect(() => {
        blocHistorique()
    }, [])

    const blocHistorique = async () => {
        try {
            const response = await axios.get("http://localhost:3006/router")
            setHistorique(response.data)
        } catch (error) {
            console.error("Erreur lors de la récupération de l'historique :", error)
        }
    }

    return (
        <div>
            <Navbar />
            <h2 className="text-white text-center">Résultat des requêtes</h2>
            <div className="bg-hdm flex flex-col justify-center py-8 sm:px-6 lg:px-8">
                <div className="">
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th>Requete</th>
                                <th>Hôtes</th>
                                <th>Option Scan</th>
                                <th>Autres Option</th>
                                <th>Résultat du Scan</th>
                                <th>Date et Heure</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#d5ceee6b] text-white text-center">
                            {historique.map((result) => (
                                <tr key={result._id}>
                                    <td className="py-2 px-4">{result.requete}</td>
                                    <td className="py-2 px-4">{result.ipAddress}</td>
                                    <td className="py-2 px-4">{result.scanOption}</td>
                                    <td className="py-2 px-4">{result.optionalOption}</td>
                                    <td className="py-2 px-4">{result.resultScan}</td>
                                    <td className="py-2 px-4">{result.dateNow}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detail
