import { Link } from "react-router-dom";
import { ItemGalleryProps } from "../../utils/types/ItemGalleryProps";

export default function ItemGallery({title, subtitle, txt, link, img}: ItemGalleryProps) {
    return (
        <article>
            <div className="content">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{txt}</p>
                <Link to={link.href}>En savoir plus</Link>
            </div>
            <img src={img.src} alt={img.alt} />
        </article>
    )
}
