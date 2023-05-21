import React from "react"


// {Urgent : A lajouter dans l'index plus tard}

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4 px-8 text-center">
            <p className="text-sm text-gray-600">
        Créé par Hadama Touré &copy; {new Date().getFullYear()} Tous droits réservés.
            </p>
        </footer>
    )
}

export default Footer
