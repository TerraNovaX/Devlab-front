import * as React from "react";

const LoginPage = () => {
    return (
        <div className="flex max-md:flex-col h-screen overflow-hidden">
            {/* Partie image */}
            <div className="flex flex-col w-[50%] max-md:w-full max-md:h-1/2 h-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07d288170057cd7c76533e56ef7c1de723bb90e567787b9c158703fc919dcd3f?placeholderIfAbsent=true&apiKey=87e86c06f03c432689bbbefb00cd13e8"
                    alt="Main visual content"
                    className="object-cover w-full h-full rounded-none"
                />
            </div>

            {/* Formulaire de login */}
            <div className="flex flex-col justify-center px-12 py-8 w-[50%] bg-white max-md:w-full max-md:h-1/2 h-full max-w-md mx-auto">
                <div className="text-xl text-zinc-900 mb-8">Connectez-vous</div>

                {/* Formulaire de connexion */}
                <form className="flex flex-col w-full">
                    {/* Email ou numéro de téléphone */}
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="emailInput" className="text-xs text-zinc-800">Login</label>
                        <input
                            type="text"
                            id="emailInput"
                            placeholder="Email or phone number"
                            className="mt-2 p-2 rounded-md border border-neutral-200"
                        />
                    </div>

                    {/* Mot de passe */}
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="passwordInput" className="text-xs text-zinc-800">Password</label>
                        <input
                            type="password"
                            id="passwordInput"
                            placeholder="Enter password"
                            className="mt-2 p-2 rounded-md border border-neutral-200"
                        />
                    </div>

                    {/* Rappel mot de passe */}
                    <div className="flex justify-between text-xs text-zinc-900 mb-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="/forgot-password" className="text-blue-600">Forgot password?</a>
                    </div>

                    {/* Bouton de soumission */}
                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-blue-600 text-white rounded-md text-base font-bold"
                    >
                        Sign in
                    </button>

                    {/* Séparateur */}
                    <div className="flex mt-8 w-full bg-neutral-200 min-h-[1px]" />

                    {/* Bouton de connexion avec Google */}
                    <button type="button" className="flex items-center mt-8 px-4 py-2.5 w-full bg-zinc-800 rounded-md text-white">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1274ec37d4ea0b6b4ff18e20eb62b5494f41d6b5fbf17d367355776b00e41bad?placeholderIfAbsent=true&apiKey=87e86c06f03c432689bbbefb00cd13e8"
                            alt="Google logo"
                            className="w-5 mr-2"
                        />
                        <span>Or sign in with Google</span>
                    </button>

                    {/* Lien pour s'inscrire */}
                    <div className="flex gap-2 items-start self-center mt-6 text-xs">
                        <span className="text-zinc-900">Don't have an account?</span>
                        <a href="/signup" className="text-blue-600">Sign up now</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
