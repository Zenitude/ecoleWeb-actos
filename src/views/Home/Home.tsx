import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import { performances } from "../../utils/datas/performances";
import { faqs } from "../../utils/datas/faqs";
import { server } from "../../assets";

export default function Home() {
  return (
    <main className="main-home">
      
      <section id="hosting">
        <h1>Hébergez sans limite.</h1>
        <p>Des services sécurisés et inédits</p>
        <figure>
          <img src={server} alt="serveur et jeune homme" />
        </figure>
      </section>

      <section id="performances">
        <h2>Performances</h2>
        <div className="cards">
          {
            performances.map((performance, index) => (
              <Card key={`${index}-${performance.title}`} title={performance.title} subtitle={performance.subtitle} txt={performance.txt} />   
            ))
          }
        </div>
      </section>

      <section id="faq">
        <h2>Foire aux questions</h2>
        <div className="dropdowns">
          {
            faqs.map((faq, index) => (
              <Dropdown key={index} summary={faq.summary} content={faq.content}/>
            ))
          }
        </div>
      </section>

      <section id="satisfaction">
        <h2>30 jours satisfait ou remboursé</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Link to={"/trial"}>Commencer</Link>
      </section>

    </main>
  )
}
