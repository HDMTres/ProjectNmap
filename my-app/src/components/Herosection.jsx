import Link from "next/link"
import React from "react"

function HeroSection() {
    return (
        <div className="w-screen h-4/5 text-white">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center">
                <img src="/image3.png" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center mr-10" />
                <div className="lg:w-5/12 w-full">
                    <h1 className="my-4 text-5xl font-bold leading-tight">
                    AstroNmap, Cartographier les Secrets de l'Univers
                    </h1>
                    <p className="text-2xl mb-8">
                    Dévoilez les profondeurs de l'espace avec nos fonctionnalités de requêtes Nmap avancées.
                    </p>
                    <div className="flex justify-center mx-auto">
                        <button className="hover:underline bg-purple-600 text-gray-800 font-bold rounded-full py-4 px-8">
                            <Link href="/mrequete">
                        Explorer l'univers
                            </Link>
                        </button>
                        <button className="ml-4 hover:underline bg-blue-600 text-gray-800 font-bold rounded-full py-4 px-8">
                            <Link href="/ellogin">
                        Connexion cosmique
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
