import * as React from "react";
import SocialIcons from "./SocialIcons";
import FormInput from "./FormInput";
import ContactInfo from "./ContactInfo";
import NavigationMenu from "./NavigationMenu";

function ContactForm() {
    const formInputs = [
        { label: "Nom", type: "text", placeholder: "Email or phone number" },
        { label: "Mail", type: "email", placeholder: "Enter password", hasIcon: true },
        { label: "Message", type: "textarea", placeholder: "Email or phone number" }
    ];

    return (
        <div className="flex overflow-hidden flex-col items-center pb-60 bg-white max-md:pb-24">
            <NavigationMenu />
            <div className="mt-28 max-w-full w-[914px] max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-10">
                            <div className="self-start text-5xl font-semibold text-black max-md:text-4xl">
                                <span>Contactez </span>
                                <span className="text-violet-600">nous</span>
                            </div>
                            <form className="flex flex-col mt-5 max-md:mr-1">
                                {formInputs.map((input, index) => (
                                    <FormInput key={index} {...input} />
                                ))}
                            </form>
                        </div>
                    </div>
                    <ContactInfo />
                </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-between items-start mt-5 max-w-full w-[914px]">
                <button className="self-start px-7 py-3.5 text-xl font-medium text-white whitespace-nowrap bg-violet-600 rounded-xl max-md:px-5">
                    Envoyer
                </button>
                <SocialIcons />
            </div>
        </div>
    );
}

export default ContactForm;
