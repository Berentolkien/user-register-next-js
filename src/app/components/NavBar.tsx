import React from "react";

function NavBar(){
    return(
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div>
                        <a href="/" className="text-white text-lg font-semibold">Lucas Bernaola</a>
                    </div>
                    <div>
                        <ul className="flex space-x-4 mr-4">
                            <li><a href="login" className="text-white">Sign In</a></li>
                            <li><a href="register" className="text-white">Sign Up</a></li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
}

export default NavBar;