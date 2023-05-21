import Link from "next/link"
import React from "react"

// {A améliorer avant le 19/05/2023}

function ForgotPassword() {
    return (
        <div className="min-h-screen bg-hdm flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 mx-auto w-full max-w-md bg-[#d5ceee22] py-8 px-4 shadow rounded-lg sm:px-10 text-center">
                <h2 className="text-3xl font-extrabold text-white">Nous nous excusons pour la gêne occasionnée</h2>
                <p className="mt-4 text-lg font-medium text-gray-100">
                        Cette fonctionnalité n'est pas encore disponible...
                </p>
                <div className="mt-8">
                    <Link href="/ellogin">
                        <button 
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-gray-900">
                                Tentez à nouveau
                        </button>
                    </Link>
                </div>
                <div className="mt-8">
                    <Link href="/">
                        <button 
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-gray-900">
                                Retourner à la page d'accueil
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword
