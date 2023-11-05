import { CardProps } from "../../utils/types/CardProps";
import { Link } from "react-router-dom";

export default function Card({img, alt, title, subtitle, txt, link}: CardProps) {
  return (
    <article>
      {(img && !link) && (<p className="icon">{img}</p>)}
      <div className="content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{txt}</p>
        {(link && img) && (<Link to={"/prices"}>En savoir plus</Link>)}
      </div>
      {(link && img) && (
        <img src={img} alt={alt} />
      )}
    </article>
  )
}
