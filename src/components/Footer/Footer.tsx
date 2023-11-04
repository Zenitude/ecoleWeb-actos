import { Link } from "react-router-dom";
import { networks } from "../../utils/datas/networks";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Nos réseaux</h2>
      <div className="networks">
        {
            networks.map((network, index) => (<Link key={`${index}-${network.name}`} to={network.href}><img src={network.src} alt={network.alt} /></Link>))
        }
      </div>
      <address>
        <span>01-02-03-04-05</span>
        <Link to={"mailto:support@contact.com"}>support@contact.com</Link>
        <Link to={"https://www.google.fr/maps/search/6+rue+de+l'invention,+75007/@48.8548565,2.30127,15z/data=!3m1!4b1?entry=ttu"}>6 rue de l'invention, 75007</Link>
      </address>
    </footer>
  )
}
