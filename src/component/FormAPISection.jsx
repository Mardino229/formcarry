import React from "react";
import formcarry_form from '/formcarry_form_icon.svg'
import lightning from '/lightning_icon.svg'

const FormAPISection = () => {
    return (
        <section className="bg-white text-center py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <p className="text-blue-600 mb-2 font-semibold tracking-wide uppercase text-sm">
                    Form API
                </p>
                <h1 className="text-6xl leading-snug text-center font-bold text-gray-900 mt-2">
                    <span>Receive emails</span><img className="inline px-2" src={lightning} alt="formcarry_form"/>
                    instantly from your website <img className="inline" src={formcarry_form} alt="formcarry_form"/> form
                </h1>
                <p className="max-w-xl mx-auto leading-loose text-gray-800 mt-4 text-lg">
                    Never worry about the backend of your form again. Create your HTML
                    form, connect to our API, get email notifications, block spam, and use
                    over 3000 integrations.
                </p>
            </div>
        </section>
    );
};

export default FormAPISection;
