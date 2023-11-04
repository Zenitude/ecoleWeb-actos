import { CardProps } from "../../utils/types/CardProps";

export default function Card({title, subtitle, txt}: CardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{txt}</p>
    </article>
  )
}
