import Titulo from "../Titulo";
import "./Habilidades.css"
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiPostgresql, DiMysql, DiMongodb } from "react-icons/di";

function Habilidades() {
    return (
        <section data-aos="flip-left" id="habilidades" className="habilidades">
            <Titulo>Habilidades</Titulo>
            <div>
                <DiHtml5 className="icon"/>
                <DiCss3 className="icon"/>
                <DiJavascript1 className="icon"/>
                <DiReact className="icon"/>
                <DiNodejs className="icon"/>
                <DiPostgresql className="icon"/>
                <DiMysql className="icon"/>
                <DiMongodb className="icon"/>
            </div>
        </section>
    )
}

export default Habilidades;