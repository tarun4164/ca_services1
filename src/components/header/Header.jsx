import React from "react";
import "./Header.scss"

const Header = ()=>{
    return(
        <header className="header">
            <div className="header-container">
                <div className="logo"><img src="#" alt="logo" ></img></div>
                <nav>
                    <ul className="header-menu">
                        <li>heade opyion1</li>
                        <li>heade opyion2</li>
                        <li>heade opyion3</li>
                        <li>heade opyion4</li>
                    </ul>
                </nav> 
            </div>
        </header>
    )
}

export default Header;