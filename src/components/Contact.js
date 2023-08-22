import React from "react";

const Contact = () => {
    return (
        <div name='contact' className="w-full h-screen flex justify-center items-center p-4">
            <form method='POST' action='https://getform.io/f/5b598147-2368-4e4c-91dc-35df73b0c879' className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-red-500 text-blue-600">Contact</p>
                    <p className="text-blue-600 py-4">Submit the form or send me an email at pinkstonr54@gmail.com</p>
                </div>
                <input className="p-2 bg-blue-600 text-yellow-400" type='text' placeholder='Name' name='name' />
                <input className="my-4 p-2 bg-blue-600 text-yellow-400" type='email' placeholder='Email' name='email' />
                <textarea className="bg-blue-600 p-2 text-yellow-400" name="message" rows="10" placeholder="Message"></textarea>
                <button className="text-white bg-yellow-400 border-2 border-red-500 hover:bg-red-500 hover:text-yellow-400 px-4 py-3 my-8 mx-auto flex items-center">Let's Colab!</button>
            </form>
        </div>
    )
};

export default Contact;