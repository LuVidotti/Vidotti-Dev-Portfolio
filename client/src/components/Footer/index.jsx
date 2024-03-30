import "./Footer.css"
import LogoIcon from "../../assets/LogoIcon.png";

function Footer() {
    return (
        <footer className="footer">
            <img src={LogoIcon} alt="Icone da logo da Vidotti Dev" />
            <div>
                <h4>Acesso rápido</h4>
                <a href="#sobre-mim"></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </footer>
    )
}

export default Footer;