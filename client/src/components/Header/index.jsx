import "./Header.css"
import Logo from "../../assets/Logo.png"
import NavLink from "../NavLink";

function Header() {
    return (
        <header className="cabecalho">
            <img src={Logo} alt="Logotipo da Vidotti Dev" />
            <nav>
                <NavLink href="#">Sobre mim</NavLink>
                <NavLink href="#">Habilidades</NavLink>
                <NavLink href="#">Projetos</NavLink>
                <NavLink href="#">Contato</NavLink>
            </nav>
            <a className="fale-comigo" href="#">Fale comigo</a>
        </header>
    )
}

export default Header;