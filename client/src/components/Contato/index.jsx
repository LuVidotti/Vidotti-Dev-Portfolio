import Titulo from "../Titulo";
import "./Contato.css";
import { FaSquareEnvelope, FaSquareInstagram, FaSquareWhatsapp, FaLinkedin } from "react-icons/fa6";


function Contato() {
    return(
        <section id="contato" className="contato">
            <Titulo>Contato</Titulo>
            <div className="redes">
                <a className="rede email" href="mailto:luisfe_vidotti@hotmail.com">
                    <FaSquareEnvelope className="rede-icon" />
                    luisfe_vidotti@hotmail.com
                </a>
                <a className="rede whats" href="https://wa.me/43999606749">
                    <FaSquareWhatsapp className="rede-icon" />
                    (43) 99960-6749
                </a>
                <a className="rede insta" href="https://www.instagram.com/lu_vidottipigr/">
                    <FaSquareInstagram className="rede-icon" />
                    lu_vidottipigr
                </a>
                <a className="rede linkedin" href="https://www.linkedin.com/in/lu%C3%ADs-felipe-vidotti-de-almeida-5061a3270/">
                    <FaLinkedin className="rede-icon" />
                    Luís Felipe Vidotti de Almeida
                </a>
            </div>
        </section>
    )
}

export default Contato;