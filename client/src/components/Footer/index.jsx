import "./Footer.css"
import LogoIcon from "../../assets/LogoIcon.png";
import { FaGithub, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
            <img src={LogoIcon} alt="Icone da logo da Vidotti Dev" />
            <div className="acesso-rapido">
                <h4>Acesso rápido</h4>
                <a href="#sobre-mim">Sobre mim</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </div>
            <div className="siga-me">
                <a href="https://github.com/LuVidotti"><FaGithub /></a>
                <a href="https://www.instagram.com/lu_vidottipigr/"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/lu%C3%ADs-felipe-vidotti-de-almeida-5061a3270/"><FaLinkedin /></a>
                <a href="https://twitter.com/lu_vidotti"><FaXTwitter /></a>
            </div>
        </footer>
    )
}

export default Footer;