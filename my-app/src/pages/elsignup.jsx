
import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import RetourButton from "@/components/Retourbutton"
import Link from "next/link"

function SignUp () {
    const [envoyer, setEnvoyer] = useState(false)

    const initialValues = {
        username: "",
        email: "",
        password: "",
        agree: false
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Veuillez entrer un pseudo"),
        email: Yup.string().email("Veuillez entrer une adresse email valide").required("Veuillez entrer une adresse email"),
        password: Yup.string().min(8, "Le mot de passe doit comporter au moins 8 caractères").required("Veuillez entrer un mot de passe"),
        agree: Yup.boolean().oneOf([true], "Vous devez accepter les règles du site")
    })

    const onSubmit = (values, { resetForm }) => {
        setEnvoyer(true)
        console.log(values)
        resetForm()
        setEnvoyer(false)
    }

    return (
        <>
            <div className="min-h-screen bghdm flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <h2 className="mx-auto w-full max-w-md mt-6 text-center text-3xl font-extrabold text-white">
          Inscrivez-vous dès maintenant !
                </h2>

                <div className="mt-8 mx-auto w-full max-w-md bg-[#d5ceee22] py-8 px-4 shadow rounded-lg sm:px-10">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ isValid }) => (
                            <Form className="space-y-6">
                                <div>
                                    <label htmlFor="username" className="text-1xl block font-medium text-[#e6fb48] hover:text-[#a5a82b]">
                    Pseudo
                                    </label>
                                    <Field
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        className="block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                                    />
                                    <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-1xl block font-medium text-[#e6fb48] hover:text-[#a5a82b]">
                    Adresse email
                                    </label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="text-1xl block font-medium text-[#e6fb48] hover:text-[#a5a82b]">
                    Mot de passe
                                    </label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div className="flex items-center">
                                    <Field
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-900 border-gray-300 rounded"
                                    />
                                    <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                    J'accepte les conditions d'utilisation du site
                                    </label>
                                </div>
                                <ErrorMessage name="agree" component="div" className="text-red-600 text-sm mt-1" />
                                <div>
                                    <span className="mr-2">Vous avez un compte ?</span>
                                    <Link href="/ellogin" className="font-medium text-[#e9ff42] hover:text-[#989a26]">
                    Connectez-vous !
                                    </Link>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={!isValid || envoyer}
                                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 ${
                                            !isValid || envoyer ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    >
                                        {envoyer ? "En cours..." : "S'inscrire"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <RetourButton/>
            </div>
        </>
    )
}

export default SignUp
