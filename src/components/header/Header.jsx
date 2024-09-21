import React from "react";
import "./Header.scss"

const Header = ()=>{
    return(
        <header className="header">
            <div className="header-container">

                <ul className="logo"><li>logo</li></ul>

                <ul className="header-menu">
                    <li>heade opyion1</li>
                    <li>heade opyion2</li>
                    <li>heade opyion3</li>
                    <li>heade opyion4</li>
                </ul>

            </div>
        </header>
    )
}

export default Header;