import * as React from "react";

function LoginForm() {
    return (
        <form className="flex flex-col w-full">
            <div className="flex flex-col w-full">
                <div className="flex-1 shrink px-4 w-full text-xs tracking-wide leading-none whitespace-nowrap text-zinc-800">
                    <label htmlFor="emailInput" className="sr-only">Email or phone number</label>
                    Login
                </div>
                <div className="flex flex-col mt-2 w-full text-base leading-none text-zinc-500">
                    <div className="flex overflow-hidden flex-col w-full rounded-md border-solid bg-zinc-100 border-[0.5px] border-neutral-200">
                        <div className="flex gap-10 justify-between items-center py-2 pr-2 pl-4 w-full rounded-md">
                            <div className="flex flex-col justify-center self-stretch my-auto">
                                <div className="gap-px self-stretch">
                                    <input type="text" id="emailInput" placeholder="Email or phone number" className="bg-transparent focus:outline-none" aria-label="Email or phone number" />
                                </div>
                            </div>
                            <div className="flex gap-4 self-stretch py-2 my-auto min-h-[32px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
                <div className="flex flex-col w-full">
                    <div className="flex-1 shrink px-4 w-full text-xs tracking-wide leading-none whitespace-nowrap text-zinc-800">
                        <label htmlFor="passwordInput" className="sr-only">Password</label>
                        Password
                    </div>
                    <div className="flex flex-col mt-2 w-full">
                        <div className="flex overflow-hidden flex-col w-full rounded-md border-solid bg-zinc-100 border-[0.5px] border-neutral-200">
                            <div className="flex gap-10 justify-between items-center py-2 pr-2 pl-4 w-full rounded-md">
                                <div className="flex flex-col justify-center self-stretch my-auto text-base leading-none text-zinc-500">
                                    <div className="gap-px self-stretch">
                                        <input type="password" id="passwordInput" placeholder="Enter password" className="bg-transparent focus:outline-none" aria-label="Enter password" />
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start self-stretch p-2 my-auto w-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9ff6c49282d6f12dd424371d959e426a6e36020a77c47a859e039b8739d4b6?placeholderIfAbsent=true&apiKey=87e86c06f03c432689bbbefb00cd13e8"
                                        alt=""
                                        className="object-contain w-4 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-start mt-5 w-full">
                    <div className="flex flex-1 shrink gap-2 items-center basis-0">
                        <div className="flex overflow-hidden flex-col self-stretch my-auto w-10">
                            <div className="flex flex-col justify-center items-start p-0.5 border-solid bg-zinc-100 border-[0.5px] border-neutral-200 rounded-[36.5px]">
                                <div className="flex shrink-0 w-4 h-4 bg-white rounded-xl shadow-sm" />
                            </div>
                        </div>
                        <label htmlFor="rememberMe" className="flex-1 shrink self-stretch my-auto text-xs tracking-wide leading-loose basis-0 text-zinc-900">
                            Remember me
                        </label>
                        <input type="checkbox" id="rememberMe" className="sr-only" />
                    </div>
                    <div className="flex-1 shrink text-xs tracking-wide leading-loose text-right text-blue-600 basis-0">
                        Forgot password?
                    </div>
                </div>
            </div>
            <button type="submit" className="px-6 py-2.5 mt-8 w-full text-base font-bold tracking-wide leading-none text-center text-white bg-blue-600 rounded-md max-md:px-5">
                Sign in
            </button>
            <div className="flex mt-8 w-full bg-neutral-200 min-h-[1px]" />
            <button type="button" className="flex gap-2 items-start mt-8 w-full text-xs tracking-wide leading-loose text-center text-white">
                <div className="flex flex-col flex-1 shrink justify-center items-center px-4 py-2.5 w-full rounded-md basis-0 bg-zinc-800 min-w-[240px]">
                    <div className="flex gap-2 items-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1274ec37d4ea0b6b4ff18e20eb62b5494f41d6b5fbf17d367355776b00e41bad?placeholderIfAbsent=true&apiKey=87e86c06f03c432689bbbefb00cd13e8"
                            alt="Google logo"
                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                        />
                        <div className="self-stretch my-auto">
                            Or sign in with Google
                        </div>
                    </div>
                </div>
            </button>
            <div className="flex gap-2 items-start self-center mt-6 text-xs tracking-wide leading-loose">
                <div className="text-zinc-900">Dont have an account?</div>
                <div className="text-right text-blue-600">Sign up now</div>
            </div>
        </form>
    );
}

export default LoginForm;