/* eslint-disable react/prop-types */
import "./InfoProjeto.css";

function InfoProjeto({ titulo, href, children }) {
    return (
        <div className="info-projeto">
            <h2>{titulo}</h2>
            <p>{children}</p>
            <a href={href}>Ver mais</a>
        </div>
    )
}

export default InfoProjeto;