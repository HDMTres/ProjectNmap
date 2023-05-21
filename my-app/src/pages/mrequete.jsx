import React, { useState } from "react"
import Nav from "@/components/Navbar"
import axios from "axios"

const Requete = () => {
    const [requete, setRequete] = useState("nmap")
    const [ipAddress, setIPAddress] = useState("")
    const [scanOption, setScanOption] = useState("")
    const [optionalOption, setOptionalOption] = useState("")


    const handleRequete = (event) => {
        setRequete(event.target.value)
    }

    const handleIPAddressChange = (event) => {
        setIPAddress(event.target.value)
    }

    const handleScanOptionChange = (event) => {
        setScanOption(event.target.value)
    }

    const handleOptionalOptionChange = (event) => {
        setOptionalOption(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        // Validation pour l'adresse IP
        const ipFaux = /^(\d{1,3}\.){3}\d{1,3}$/

        if (!ipFaux.test(ipAddress)) {
            console.error("Adresse IP invalide")

            return
        }
      
        // Gardez dans un object
        const data = {
            requete,
            ipAddress,
            scanOption,
            optionalOption,
        }
      
        try {
            const response = await axios.post(
                "http://localhost:3006/router",
                data
            )
      
            // On reintialise
            setRequete("")
            setIPAddress("")
            setScanOption("")
            setOptionalOption("")
      
            // Afin d'afficher l'erreur
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
      

    return (
        <div>
            <Nav />
            <div className="mt-8 mx-auto w-full max-w-md bg-[#d5ceee22] py-8 px-4 shadow rounded-lg sm:px-10 ">
                <h2 className="text-3xl font-extrabold text-center mb-6">
          Page de requête
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2">Requete :</label>
                        <input
                            type="text"
                            value={requete}
                            onChange={handleRequete}
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Adresse IP :</label>
                        <input
                            type="text"
                            value={ipAddress}
                            onChange={handleIPAddressChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Option de scan :</label>
                        <select
                            value={scanOption}
                            onChange={handleScanOptionChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm"
                        >
                            <option value="">-- Choisissez une option --</option>
                            <option value="-sS">-sS</option>
                            <option value="-sV">-sV</option>
                            <option value="-sO">-sO</option>
                            <option value="-sN">-sN</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2">Option facultative :</label>
                        <select
                            value={optionalOption}
                            onChange={handleOptionalOptionChange}
                            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm"
                        >
                            <option value="">-- Aucune option facultative --</option>
                            <option value="--max-retries">--max-retries</option>
                            <option value="--host-timeout">--host-timeout</option>
                            <option value="--append-output">--append-output</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                    >
            Envoyer la requête
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Requete
