import Link from "next/link"

function RetourButton () {
    return (
        <div className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800">
            <Link href="/">
                <span>Retour à la page d'accueil</span>
            </Link>
        </div>
    )
}

export default RetourButton
