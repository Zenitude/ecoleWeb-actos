import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { open, close } from "../../assets";

type HeaderProps = {
    size: number;
}

export default function Header({size}: HeaderProps) {
    const [ toggle, setToggle ] = useState(false);
    

    return (
        <header>
            <Link to={"/"}>ACTOS</Link>
            {
                ((size > 715) || (size < 715 && toggle)) &&
                (
                    <nav>
                        <NavLink to={"/"}>Pourquoi Actos ?</NavLink>
                        <NavLink to={"/features"}>Fonctionnalités</NavLink>
                        <NavLink to={"/prices"}>Tarifs</NavLink>
                        {
                            (size > 715) && (<NavLink to={"/trial"}>Essai gratuit</NavLink>)
                        }
                    </nav>
                )
            }
            {
                size <= 715 && 
                (
                    <button className="menu" onClick={() => setToggle(!toggle)}>
                    { 
                        !toggle
                        ? (<img src={open} alt={"open menu"} />)
                        : (<img src={close} alt={"close menu"} />)
                    }
                    </button>
                )
            }
            
        </header>
    )
}
