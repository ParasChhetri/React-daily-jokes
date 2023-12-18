import { useState } from "react";
import './NavBar.scss';
import { FaChevronCircleDown } from "react-icons/fa";

export const NavBar = () => {
    const [close, setClose] = useState(true);
    return (
        <>
            <header>
                { close &&
                    <nav>
                        <div className="site-name">
                            Daily jokes
                        </div>
                    </nav>
                }
                <div className="close-button-container">
                    <button className="close-button" onClick={() => {
                        setClose((closeNav) => !closeNav)
                    }}>
                        <FaChevronCircleDown />
                    </button>
                </div>
            </header>
        </>
    );
}