const Navbar = () => {
    return(
        <div className="  flex text-white justify-end top-0 w-full   ">
            <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400" href="mailto:kumar.306@iitj.ac.in" target="_blank">Mail</a>
            <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400">Contact</a>
            <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400">Linked In</a>
            <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400">Sponsors</a>
            <a className="border-2 border-red-400 m-1 p-2 bg-red-800 hover:bg-red-400">Read More</a>
        </div>
    )
}

export default Navbar