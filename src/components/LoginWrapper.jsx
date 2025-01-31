import * as React from "react";
import LoginForm from "../components/LoginForm";

function LoginWrapper() {
    return (
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch px-12 py-56 my-auto w-full bg-white min-h-[901px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full rounded-lg shadow-[0px_3px_24px_rgba(26,26,26,0.1)]">
                            <div className="flex flex-col w-full">
                                <div className="text-xl leading-snug text-zinc-900">
                                    Connectez-vous
                                </div>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginWrapper;