import React, { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import Nav from "@/components/Navbar"


const Historique = () => {
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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/router/${id}`)
            blocHistorique()
        } catch (error) {
            console.error("Erreur lors de la tentaive de suppression :", error)
        }
    }
      

    return (
        <div>
            <Nav />
            <div className="bg-hdm flex flex-col justify-center py-8 sm:px-6 lg:px-8">
                <h2 className="mx-auto w-full max-w-md mt-2 text-center text-3xl block font-medium text-[#e6fb48] hover:text-[#a5a82b]">
          Historique des résultats de scan
                </h2>

                <div className="">
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr >
                                <th >Option Scan</th>
                                <th >Hôtes</th>
                                <th >Date et Heure</th>
                                <th >Modification</th>
                            </tr>
                        </thead>
                        <tbody className=" bg-[#d5ceee6b] text-white text-center">
                            {historique.map((result) => (
                                <tr key={result._id}>
                                    <td className="py-2 px-4">{result.requete}</td>
                                    <td className="py-2 px-4">{result.ipAddress}</td>
                                    <td className="py-2 px-4">{result.dateNow}</td>
                                    <td className="py-2 px-4">
                                        <button
                                            onClick={() => handleDelete(result._id)}
                                            className="text-white bg-[#2d71c9a5] hover:bg-purple-700 py-1 px-3 rounded-full"
                                        >
                                            Supprimer
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 text-center">
                    <Link href="/mrequete">
                        <div className="block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-900">
              Faire une nouvelle requête
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Historique
