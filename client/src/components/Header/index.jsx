import "./Header.css"
import Logo from "../../assets/Logo.png"
import NavLink from "../NavLink";

function Header() {
    return (
        <header className="cabecalho">
            <img onClick={() => window.reload()} src={Logo} alt="Logotipo da Vidotti Dev" />
            <nav>
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