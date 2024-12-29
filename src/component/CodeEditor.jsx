import React from 'react';

export default function CodeEditor({type}) {
    return (
        <div className="max-w-2xl mx-auto my-8">
            <div className="bg-white pb-16 rounded-lg shadow-lg overflow-hidden">
                {/* Window Controls */}
                <div className="bg-white py-2 px-6 flex items-center">
                    <div className="flex gap-3">
                        <div className="w-2.5 h-2.5 rounded-full opacity-80 bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full opacity-80 bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full opacity-80 bg-[#27c93f]"></div>
                    </div>
                    <div className="mx-auto font-semibold bg-purple-700 text-white px-7 py-1 rounded-xl text-xs">
                        VS Code
                    </div>
                </div>

                {/* Code Content */}
                <div className="px-6 pb-6 font-mono text-sm leading-relaxed overflow-auto max-h-[300px]">
                    <div className="bg-[#f6f8fa] w-max text-lg">
                        <div className="flex gap-4">
                    {type === "HTML" &&
                        <div className="bg-[#f6f8fa] flex gap-4 p-6 rounded overflow-auto ">
                            <div className="text-gray-500 select-none">
                                {Array.from({ length: 7 }, (_, i) => (
                                    <div key={i + 1}>{i + 1}</div>
                                ))}
                            </div>
                            <div className="text-white">
                                <div>
                                    <span className="text-blue-400">{'<form '}</span>
                                    <span className="text-purple-400">action</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"https://formcarry.com/s/{'{Your Form ID}'}"</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-purple-400">method</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"POST"</span>
                                    <span className="text-purple-400"> enctype</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"multipart/form-data"</span>
                                    <span className="text-blue-400">{'>'}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-blue-400">{'<input '}</span>
                                    <span className="text-purple-400">type</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"email"</span>
                                    <span className="text-purple-400"> name</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"email"</span>
                                    <span className="text-blue-400">{'/>'}</span>
                                </div>
                                <div className="ml-4"><br/> </div>
                                <div className="ml-4">
                                    <span className="text-blue-400">{'<textarea '}</span>
                                    <span className="text-purple-400">name</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"message"</span>
                                    <span className="text-blue-400">{'></textarea>'}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-blue-400">{'<button '}</span>
                                    <span className="text-purple-400">type</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"submit"</span>
                                    <span className="text-blue-400">{'>'}</span>
                                    <span className="text-black">Submit</span>
                                    <span className="text-blue-400">{'</button>'}</span>
                                </div>
                                <div>
                                    <span className="text-blue-400">{'</form>'}</span>
                                </div>
                            </div>
                        </div>
                    }
                    {type === "jQuery" &&
                        <div className="bg-[#f6f8fa] flex gap-4 p-6 rounded overflow-auto">
                            <div className="text-gray-500 select-none">
                                {Array.from({length: 27}, (_, i) => (
                                    <div key={i + 1}>{i + 1}</div>
                                ))}
                            </div>
                            <div className="text-black">
                                <div><span className="text-blue-400">{'<form'}</span></div>
                                <div className="ml-4">
                                    <span className="text-purple-400">class</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"ajaxForm"</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-purple-400">action</span>
                                    <span className="text-white">=</span>
                                    <span
                                        className="text-green-400">"https://formcarry.com/s/{'{Your Form ID}'}"</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-purple-400">method</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"POST"</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-purple-400">accept-charset</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"UTF-8"</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-purple-400">enctype</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"multipart/form-data"</span>
                                    <span className="text-blue-400">{'>'}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-blue-400">{'<input '}</span>
                                    <span className="text-purple-400">type</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"file"</span>
                                    <span className="text-purple-400"> name</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"picture"</span>
                                    <span className="text-blue-400">{'/>'}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-blue-400">{'<input '}</span>
                                    <span className="text-purple-400">type</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"submit"</span>
                                    <span className="text-purple-400"> value</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"Send"</span>
                                    <span className="text-blue-400">{'/>'}</span>
                                </div>
                                <div><span className="text-blue-400">{'</form>'}</span></div>
                                <div className="mt-4">
                                    <span className="text-blue-400">{'<script '}</span>
                                    <span className="text-purple-400">src</span>
                                    <span className="text-white">=</span>
                                    <span
                                        className="text-green-400">"https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"</span>
                                    <span className="text-blue-400">{'></script>'}</span>
                                </div>
                                <div>
                                    <span className="text-blue-400">{'<script>'}</span>
                                </div>
                                <div className="ml-4 text-yellow-300">{'$(function(){'}</div>
                                <div className="ml-8 text-yellow-300">{`$(".ajaxForm").submit(function(e){`}</div>
                                <div className="ml-12 text-yellow-300">{'e.preventDefault();'}</div>
                                <div className="ml-12 text-yellow-300">{'var href = $(this).attr("action");'}</div>
                                <div className="ml-12 text-yellow-300">{'$.ajax({'}</div>
                                <div className="ml-16 text-yellow-300">{'type: "POST",'}</div>
                                <div className="ml-16 text-yellow-300">{'dataType: "json",'}</div>
                                <div className="ml-16 text-yellow-300">{'url: href,'}</div>
                                <div className="ml-16 text-yellow-300">{'data: $(this).serialize(),'}</div>
                                <div className="ml-16 text-yellow-300">{'success: function(response){'}</div>
                                <div className="ml-20 text-yellow-300">{'if(response.status == "success"){'}</div>
                                <div
                                    className="ml-24 text-yellow-300">{'alert("We received your submission, thank you!");'}</div>
                                <div className="ml-20 text-yellow-300">{'} else {'}</div>
                                <div
                                    className="ml-24 text-yellow-300">{'alert("An error occured: " + response.message);'}</div>
                                <div className="ml-20 text-yellow-300">{'}'}</div>
                                <div className="ml-16 text-yellow-300">{'}'}</div>
                                <div className="ml-12 text-yellow-300">{'});'}</div>
                                <div className="ml-8 text-yellow-300">{'});'}</div>
                                <div className="ml-4 text-yellow-300">{'});'}</div>
                                <div><span className="text-blue-400">{'</script>'}</span></div>
                            </div>
                        </div>
                    }
                    {type === "React" &&
                        <div className="bg-[#f6f8fa] flex gap-4 p-6 rounded overflow-auto">
                            <div className="text-gray-500 select-none">
                                {Array.from({length: 23}, (_, i) => (
                                    <div key={i + 1}>{i + 1}</div>
                                ))}
                            </div>
                            <div className="text-black">
                                <div>
                                    <span className="text-purple-400">import</span>
                                    <span className="text-white"> React </span>
                                    <span className="text-purple-400">from</span>
                                    <span className="text-green-400"> 'react'</span>;
                                </div>
                                <div>
                                    <span className="text-purple-400">import</span>
                                    <span className="text-white"> {'{ useForm }'} </span>
                                    <span className="text-purple-400">from</span>
                                    <span className="text-green-400"> '@formcarry/react'</span>;
                                </div>
                                <div>&nbsp;</div>
                                <div>
                                    <span className="text-blue-400">function</span>
                                    <span className="text-yellow-300"> MyFormcarry</span>
                                    <span className="text-white">() {'{'}</span>
                                </div>
                                <div
                                    className="text-gray-400 ml-2">{'// Call the \'useForm\' hook in your function component'}</div>
                                <div className="ml-2">
                                    <span className="text-purple-400">const</span>
                                    <span className="text-white"> {'{'}</span>
                                    <span className="text-yellow-300">state, submit</span>
                                    <span className="text-white">{'}'} = </span>
                                    <span className="text-yellow-300">useForm</span>
                                    <span className="text-white">({'{'}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-white">id: </span>
                                    <span className="text-green-400">'Your Form ID'</span>
                                </div>
                                <div className="ml-2"><span className="text-white">{'})'}</span>;</div>
                                <div>&nbsp;</div>
                                <div className="text-gray-400 ml-2">{'// Success message'}</div>
                                <div className="ml-2">
                                    <span className="text-purple-400">if</span>
                                    <span className="text-white"> (state.submitted) {'{'}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-purple-400">return</span>
                                    <span className="text-white"> {'<'}</span>
                                    <span className="text-blue-400">div</span>
                                    <span className="text-white">{'>'}</span>
                                    <span className="text-white">Thank you! We received your submission.</span>
                                    <span className="text-white">{'</'}</span>
                                    <span className="text-blue-400">div</span>
                                    <span className="text-white">{'>'}</span>;
                                </div>
                                <div className="ml-2">{'}'}</div>
                                <div>&nbsp;</div>
                                <div className="ml-2">
                                    <span className="text-purple-400">return</span>
                                    <span className="text-white"> (</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-white">{'<'}</span>
                                    <span className="text-blue-400">form</span>
                                    <span className="text-purple-400"> onSubmit</span>
                                    <span className="text-white">={'{submit}'}</span>
                                    <span className="text-white">{'>'}</span>
                                </div>
                                <div className="ml-6">
                                    <span className="text-white">{'<'}</span>
                                    <span className="text-blue-400">label</span>
                                    <span className="text-purple-400"> htmlFor</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"email"</span>
                                    <span className="text-white">{'>'}</span>
                                    <span className="text-white">Email</span>
                                    <span className="text-white">{'</'}</span>
                                    <span className="text-blue-400">label</span>
                                    <span className="text-white">{'>'}</span>
                                </div>
                                <div className="ml-6">
                                    <span className="text-white">{'<'}</span>
                                    <span className="text-blue-400">input</span>
                                    <span className="text-purple-400"> id</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"email"</span>
                                    <span className="text-purple-400"> type</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"email"</span>
                                    <span className="text-purple-400"> name</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"email"</span>
                                    <span className="text-white">{'/>'}</span>
                                </div>
                                <div>&nbsp;</div>
                                <div className="ml-6">
                                    <span className="text-white">{'<'}</span>
                                    <span className="text-blue-400">label</span>
                                    <span className="text-purple-400"> htmlFor</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"message"</span>
                                    <span className="text-white">{'>'}</span>
                                    <span className="text-white">Message</span>
                                    <span className="text-white">{'</'}</span>
                                    <span className="text-blue-400">label</span>
                                    <span className="text-white">{'>'}</span>
                                </div>
                                <div className="ml-6">
                                    <span className="text-white">{'<'}</span>
                                    <span className="text-blue-400">textarea</span>
                                    <span className="text-purple-400"> id</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"message"</span>
                                    <span className="text-purple-400"> name</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"message"</span>
                                    <span className="text-white">{'/>'}</span>
                                </div>
                                <div>&nbsp;</div>
                                <div className="ml-6">
                                    <span className="text-white">{'<'}</span>
                                    <span className="text-blue-400">button</span>
                                    <span className="text-purple-400"> type</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-400">"submit"</span>
                                    <span className="text-white">{'>'}</span>
                                    <span className="text-white">Send</span>
                                    <span className="text-white">{'</'}</span>
                                    <span className="text-blue-400">button</span>
                                    <span className="text-white">{'>'}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-white">{'</'}</span>
                                    <span className="text-blue-400">form</span>
                                    <span className="text-white">{'>'}</span>
                                </div>
                                <div className="ml-2">);</div>
                                <div>{'}'}</div>
                            </div>
                        </div>
                    }

                    {type === "Vue" &&
                        <div className="bg-[#f6f8fa] flex gap-4 p-6 rounded overflow-auto">
                                    <div className="text-gray-500 select-none">
                                        {Array.from({ length: 32 }, (_, i) => (
                                            <div key={i + 1}>{i + 1}</div>
                                        ))}
                                    </div>
                                    <div className="text-black">
                                        <div><span className="text-blue-400">{'<template>'}</span></div>
                                        <div className="ml-2"><span className="text-blue-400">{'<form '}</span><span className="text-purple-400">@submit.prevent</span><span className="text-white">=</span><span className="text-green-400">"submitForm"</span><span className="text-blue-400">{'>'}</span></div>
                                        <div className="ml-4"><span className="text-blue-400">{'<label>'}</span></div>
                                        <div className="ml-6"><span className="text-blue-400">{'<span>'}</span><span className="text-white">Email</span><span className="text-blue-400">{'</span>'}</span></div>
                                        <div className="ml-6"><span className="text-blue-400">{'<input '}</span><span className="text-purple-400">type</span><span className="text-white">=</span><span className="text-green-400">"email"</span><span className="text-purple-400"> name</span><span className="text-white">=</span><span className="text-green-400">"email"</span><span className="text-purple-400"> v-model</span><span className="text-white">=</span><span className="text-green-400">"email"</span><span className="text-blue-400">{' />'}</span></div>
                                        <div className="ml-4"><span className="text-blue-400">{'</label>'}</span></div>
                                        <div className="ml-4"><span className="text-blue-400">{'<label>'}</span></div>
                                        <div className="ml-6"><span className="text-blue-400">{'<span>'}</span><span className="text-white">Message</span><span className="text-blue-400">{'</span>'}</span></div>
                                        <div className="ml-6"><span className="text-blue-400">{'<textarea '}</span><span className="text-purple-400">name</span><span className="text-white">=</span><span className="text-green-400">"message"</span><span className="text-purple-400"> v-model</span><span className="text-white">=</span><span className="text-green-400">"message"</span><span className="text-blue-400">{'></textarea>'}</span></div>
                                        <div className="ml-4"><span className="text-blue-400">{'</label>'}</span></div>
                                        <div className="ml-4"><span className="text-blue-400">{'<button '}</span><span className="text-purple-400">type</span><span className="text-white">=</span><span className="text-green-400">"submit"</span><span className="text-blue-400">{'>'}</span><span className="text-white">Submit</span><span className="text-blue-400">{'</button>'}</span></div>
                                        <div className="ml-2"><span className="text-blue-400">{'</form>'}</span></div>
                                        <div><span className="text-blue-400">{'</template>'}</span></div>
                                        <div>&nbsp;</div>
                                        <div><span className="text-blue-400">{'<script>'}</span></div>
                                        <div><span className="text-purple-400">export</span><span className="text-white"> </span><span className="text-purple-400">default</span><span className="text-white"> {'{'}</span></div>
                                        <div className="ml-2"><span className="text-yellow-300">data</span><span className="text-white">() {'{'}</span></div>
                                        <div className="ml-4"><span className="text-purple-400">return</span><span className="text-white"> {'{'}</span></div>
                                        <div className="ml-6"><span className="text-white">email: </span><span className="text-green-400">''</span><span className="text-white">,</span></div>
                                        <div className="ml-6"><span className="text-white">message: </span><span className="text-green-400">''</span><span className="text-white">,</span></div>
                                        <div className="ml-6"><span className="text-white">endpoint: </span><span className="text-green-400">'https://formcarry.com/s/{'{Your Form ID}'}'</span><span className="text-white">,</span></div>
                                        <div className="ml-4"><span className="text-white">{'}'}</span></div>
                                        <div className="ml-2"><span className="text-white">{'}'}</span><span className="text-white">,</span></div>
                                        <div className="ml-2"><span className="text-white">methods: {'{'}</span></div>
                                        <div className="ml-4"><span className="text-purple-400">async</span><span className="text-yellow-300"> submitForm</span><span className="text-white">() {'{'}</span></div>
                                        <div className="ml-6"><span className="text-purple-400">const</span><span className="text-white"> data = {'{'}</span></div>
                                        <div className="ml-8"><span className="text-white">email: </span><span className="text-purple-400">this</span><span className="text-white">.email,</span></div>
                                        <div className="ml-8"><span className="text-white">message: </span><span className="text-purple-400">this</span><span className="text-white">.message,</span></div>
                                        <div className="ml-6"><span className="text-white">{'}'}</span></div>
                                        <div className="ml-6"><span className="text-purple-400">const</span><span className="text-white"> response = </span><span className="text-purple-400">await</span><span className="text-white"> </span><span className="text-purple-400">this</span><span className="text-white">.$axios.post(</span><span className="text-purple-400">this</span><span className="text-white">.endpoint, data)</span></div>
                                        <div className="ml-4"><span className="text-white">{'}'}</span><span className="text-white">,</span></div>
                                        <div className="ml-2"><span className="text-white">{'}'}</span><span className="text-white">,</span></div>
                                        <div><span className="text-white">{'}'}</span></div>
                                        <div><span className="text-blue-400">{'</script>'}</span></div>
                                    </div>
                            </div>
                    }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}