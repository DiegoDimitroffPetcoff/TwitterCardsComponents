import { useState } from "react";
import "./twitterCard.css";
// eslint-disable-next-line react/prop-types
export default function Card({ name, text }) {
    const [followUp, setFollowUp] = useState("Seguir")
    function follow() {
      if(followUp == "Seguir" ){
       setFollowUp("siguiendo")
      }else{setFollowUp("Seguir") }
    }


  const url = `https://unavatar.io/twitter/${text}`;

  return (
    <article className="ContainerCard">
      <header>
        <img src={url} alt="Imagen_de_perfil" className="img" />
        <div>
          <strong className="name">{name}</strong>
          <span className="text">@{text}</span>
        </div>
      </header>
      <aside>
        <button className="button" onClick={follow}>{followUp}</button>
      </aside>
    </article>
  );
}
