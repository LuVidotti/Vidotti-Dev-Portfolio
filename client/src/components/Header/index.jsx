import "./Header.css"
import Logo from "../../assets/Logo.png"
import NavLink from "../NavLink";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        if(openMenu === true) {
            setOpenMenu(false)
        } else {
            setOpenMenu(true)
        }
    }

    return (
        <header className="cabecalho">
            <img onClick={() => window.reload()} src={Logo} alt="Logotipo da Vidotti Dev" />
            <nav className="desktop-nav">
                <NavLink href="#sobre-mim">Sobre mim</NavLink>
                <NavLink href="#habilidades">Habilidades</NavLink>
                <NavLink href="#projetos">Projetos</NavLink>
                <NavLink href="#contato">Contato</NavLink>
            </nav>
            <FaBars onClick={toggleMenu} className="menu"/>
            <nav className={`mobile-nav ${openMenu ? "nav--ativa" : ""}`}>
                <NavLink href="#sobre-mim">Sobre mim</NavLink>
                <NavLink href="#habilidades">Habilidades</NavLink>
                <NavLink href="#projetos">Projetos</NavLink>
                <NavLink href="#contato">Contato</NavLink>
            </nav>
            <a className="fale-comigo" href="#contato">Fale comigo</a>
        </header>
    )
}

export default Header;