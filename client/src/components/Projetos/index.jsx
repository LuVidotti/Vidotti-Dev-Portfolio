import Titulo from "../Titulo";
import "./Projetos.css"
import RedeSocial from "../../assets/rede-social.png";
import CineList from "../../assets/cineList.png";
import Restaurante from "../../assets/restaurante.png";
import InfoProjeto from "../InfoProjeto";

function Projetos() {
    return(
        <section id="projetos" className="projetos">
            <Titulo>Projetos</Titulo>
            <div data-aos="fade-right">
                <img src={RedeSocial} alt="imagem do projeto de rede social" />
                <InfoProjeto titulo="Rede Social" href="https://github.com/LuVidotti/Rede-Social">Este projeto foi feito com o intuito de tentar fazer uma rede social. Neste site é possível criar conta, adicionar amigos, criar, excluir e responder postagens, além de poder ver o seu perfil.</InfoProjeto>
            </div>
            <div data-aos="fade-left">
                <InfoProjeto titulo="CineList" href="https://github.com/LuVidotti/Projeto-2-Full-Stack">Este site foi feito como um projeto da faculdade. Nele é possível fazer login e adicionar e buscar filmes, há implementado nele, muitas funcionalidades especiais no backend, como: https, comunicação em tempo real por websockets, criptografia de dados, proteção contra injeção, etc.</InfoProjeto>
                <img src={CineList} alt="imagem do projeto CineList" />
            </div>
            <div data-aos="fade-right">
                <img src={Restaurante} alt="imagem do projeto de Restaurante" />
                <InfoProjeto titulo="Restaurante" href="https://github.com/LuVidotti/Restaurante-back-end/tree/master">Este site foi criado no intuido de ser um gerenciador de um restaurante, onde se pode adicionar pratos, sobremesas e pedidos, além de gerenciar as mesas.</InfoProjeto>
            </div>
        </section>
    )
}

export default Projetos;