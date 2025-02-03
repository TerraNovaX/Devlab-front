import * as React from "react";
import emailIcon from "../../assets/icons/email.png";

function ContactInfo() {
    const contactDetails = [
        { icon: "https://cdn-icons-png.flaticon.com/512/64/64113.png", text: "NYC, United States" },
        { icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/all-icons/phone-call-kq9z3lfm4welx5rbsdfd.png/phone-call-ygdahfdcompo15s9uregk.png?_a=DAJFJtWIZAAC", text: "000111222333" },
        { icon: emailIcon, text: "somebody@gmail.com" }
    ];

    return (
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-28 text-base text-black max-md:mt-10">
                <div>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                    libero et velit interdum, ac aliquet odio mattis.
                </div>
                <div className="flex flex-col mt-7 max-w-full text-xs rounded-xl w-[416px]">
                    <div className="flex relative flex-col items-end px-11 pt-2.5 pb-24 w-full rounded-xl aspect-[2.391] max-md:pb-24 max-md:pl-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/faa4728e348056b0dd14d1d37ed77415bef156be8a9b4c66c07ee97b68a7bcb3?placeholderIfAbsent=true&apiKey=87e86c06f03c432689bbbefb00cd13e8"
                            alt="Office location map"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex overflow-hidden relative flex-col items-start px-1.5 py-1.5 -mb-5 bg-white rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.25)] max-md:mb-2.5">
                            <div className="self-stretch text-xs font-semibold text-red-500">
                                Company name
                            </div>
                            <div>315 W 36th St.</div>
                            <div>NY 10018</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start mt-7 max-w-full w-[226px]">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex gap-4 mt-3.5 first:mt-0">
                            <img
                                loading="lazy"
                                src= {detail.icon}
                                alt=""
                                className="object-contain shrink-0 w-5 aspect-square"
                            />
                            <div className="grow">{detail.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;