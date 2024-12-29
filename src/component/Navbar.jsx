import formcarry from '/formcarry_logo.svg'
export default function Navbar () {
    return(
        <nav className="flex justify-around items-center mx-auto py-12">
            <img src={formcarry} className="cursor-pointer" alt="formcarry_logo" />
            <div className="flex text-gray-500 text-sm justify-evenly gap-4">
                <p className="cursor-pointer hover:text-black text-gray-500 px-4 py-2 text-sm hover:bg-gray-50 rounded-2xl">Examples</p>
                <p className="cursor-pointer hover:text-black text-gray-500 px-4 py-2 text-sm hover:bg-gray-50 rounded-2xl">Form Generator</p>
                <p className="cursor-pointer hover:text-black text-gray-500 px-4 py-2 text-sm hover:bg-gray-50 rounded-2xl">Integrations</p>
                <p className="cursor-pointer hover:text-black text-gray-500 px-4 py-2 text-sm hover:bg-gray-50 rounded-2xl"> Docs</p>
                <p className="cursor-pointer hover:text-black text-gray-500 px-4 py-2 text-sm hover:bg-gray-50 rounded-2xl"> Pricing</p>
            </div>
            <div className="flex gap-4">
                <button className="cursor-pointer text-gray-500 px-4 py-2 text-sm hover:bg-gray-50 rounded-2xl">Login</button>
                <button className="rounded-2xl text-gray-800 font-semibold px-7 cursor-pointer text-sm bg-gray-50">Sign up</button>
            </div>
        </nav>
    )
}