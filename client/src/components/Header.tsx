function Header() {
    return (
        <header className="bg-white h-[50px] border-b-1 border-gray-300 flex justify-center fixed w-full">
            <div className="flex items-center h-full w-[1000px] justify-between">
                <h1 className="text-4xl">Hotel</h1>
                <ul className="text-sm uppercase">
                    <li>Sign In</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;