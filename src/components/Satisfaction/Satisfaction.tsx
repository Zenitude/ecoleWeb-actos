import { Link } from "react-router-dom";

export default function Satisfaction() {
  return (
    <section id="satisfaction">
        <h2>30 jours satisfait ou remboursé</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Link to={"/trial"} className="link action pill">Commencer</Link>
    </section>
  )
}
