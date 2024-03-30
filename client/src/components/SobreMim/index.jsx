import Titulo from "../Titulo";
import "./SobreMim.css"
import Foto from "../../assets/foto de perfil linkedin.jpeg";

function SobreMim() {
    return (
        <section data-aos="fade-down" id="sobre-mim" className="sobre-mim">
            <Titulo>Sobre mim</Titulo>
            <div>
                <img src={Foto} alt="Foto de Luis Felipe Vidotti" />
                <p>Meu nome é Luís Felipe Vidotti e sou apaixonado por tecnologia. Atualmente estou cursando análise e desenvolvimento de sistemas e tenho como objetivo me tornar um desenvolvedor FullStack. Ainda busco minha primeira oportunidade profissional porém tenho diversos projetos pessoais, os quais coloco minhas habilidades a mostra, sendo elas: html, css, javascript, react, node, react-native, postgresql, mysql e mongoDB. Além da faculdade, utilizo a plataforma Alura para me desenvolver ainda mais como profissional.</p>
            </div>
        </section>
    )
}

export default SobreMim;