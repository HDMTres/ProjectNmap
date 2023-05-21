import Link from "next/link"
import React, { useState } from "react"
import RetourButton from "@/components/Retourbutton"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"

function Login () {
    const [envoyerlog, setEnvoyerlog] = useState(false)

    const initialValues = {
        username: "",
        email: "",
        password: "",
        agree: false
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Votre addresse email est invalide").required("Veuillez entrer une votre adresse email"),
        password: Yup.string().min(8, "Le mot de passe doit contenir au minimum 8 caractères").required("Veuillez entrer votre mot de passe")
    })

    const onSubmit = (values, { resetForm }) => {
        setEnvoyerlog(true)
        console.log(values)
        resetForm()
        setEnvoyerlog(false)
    }

    return (
        <>
            <div className="min-h-screen bghdm flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <h2 className="mx-auto w-full max-w-md mt-6 text-center text-3xl font-extrabold text-white">
          Connectez-vous à votre HNAccount
                </h2>

                <div className="mt-8 mx-auto w-full max-w-md bg-[#d5ceee56] py-8 px-4 shadow rounded-lg sm:px-10">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ isValid }) => (
                            <Form className="space-y-6">          
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
                                        autoComplete="new                    password"
                                        className="block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded"
                                        />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Se souvenir de moi
                                        </label>
                                    </div>

                                    <div className="stext-sm">
                                        <Link href="/elforgotpassword" className="font-medium text-[#e9ff42] hover:text-[#989a26]">
                  Mot de passe oublié ?
                                        </Link>
                                    </div>
                                </div>

                                <div className="text-sm">
                                    <span className="mr-2">Vous n'avez pas de compte ?</span>
                                    <Link href="/elsignup" className="font-medium text-[#e9ff42] hover:text-[#989a26]">
                  Inscrivez-vous !
                                    </Link>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={!isValid || envoyerlog}
                                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 ${
                                            !isValid || envoyerlog ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    >
                                        {envoyerlog ? "En cours..." : "Se connectez"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                < RetourButton/>
            </div>
        </>
    )
}

export default Login
