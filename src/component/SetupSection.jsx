import React, {useState} from 'react';
import html from '/icons8-html (1).svg';
import jquery from '/icons8-jquery.svg';
import CodeEditor from "./CodeEditor.jsx";
const TechBadge = ({ name, icon},  ...props ) => (
    <div className={`flex cursor-pointer ${props.active && "bg-white text-black"} items-center px-4 py-3 rounded-full`}>
        <img src={icon} className="w-5" alt=""/>
        <span className="font-semibold text-gray-400">{name}</span>
    </div>
);

const SetupSection = () => {
    const technologies = [
        {
            name: 'HTML',
            icon: html
        },
        {
            name: 'jQuery',
            icon: jquery
        },
        {
            name: 'React',
            icon: ''
        },
        {
            name: 'Vue',
            icon: ''
        }
    ];
    const [type, setType] = useState('HTML')

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <span className="text-purple-600 font-bold mb-6 block">
                  SETUP, EASY-PEASY!
                </span>

                {/* Main title */}
                <h2 className="text-4xl md:text-5xl font-bold leading-relaxed text-gray-800 mb-8">
                    Easiest way to setup
                    <br/>
                    your HTML form.
                </h2>

                {/* Description */}
                <div className="space-y-4 mb-12">
                    <p className="text-gray-700 text-xl leading-relaxed">
                        Don't worry about emails, spam checking, integrations and form issues ever, <br/>
                        code your front-end, add your unique formcarry URL, and we'll handle the rest. <br/>
                        Within literally just 3 minutes, you can have a fully functional form for any platform
                    </p>
                </div>

                {/* Technology badges */}
                <div className="flex flex-wrap bg-gray-50 max-w-md rounded-3xl mx-auto justify-around gap-2">
                    {technologies.map((tech) => (
                        <button
                            onClick={() => setType(tech.name)}>
                            <TechBadge
                            key={tech.name}
                            {...tech}
                            active ={true}
                        />
                        </button>
                    ))}
                </div>
            </div>
            <CodeEditor type={type}/>
        </section>
    );
};

export default SetupSection;