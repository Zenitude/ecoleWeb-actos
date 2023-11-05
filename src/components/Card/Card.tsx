import { CardProps } from "../../utils/types/CardProps";

export default function Card({icon, title, subtitle, txt}: CardProps) {
  return (
    <article>
      {icon && (<p>{icon}</p>)}
      <div className="content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{txt}</p>
      </div>
    </article>
  )
}
