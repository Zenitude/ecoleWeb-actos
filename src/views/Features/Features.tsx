import { Link } from "react-router-dom";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import Card from "../../components/Card/Card";
import Satisfaction from "../../components/Satisfaction/Satisfaction";
import { allFeatures } from "../../utils/datas/features";
import { products } from "../../utils/datas/products";

export default function Features() {
  return (
    <main className="main main-features">

      <section id="features">
        <h1>Appréciez nos fonctionnalités</h1>
        <p>Découvrez sur cette page pourquoi nous sommes numéro 1.</p>
        <div className="links">
          <Link to={"/features#features"} className="link action">Services</Link>
          <Link to={"/prices"} className={"link action-outline"}>Tarifs</Link>
        </div>
        <div className="cards">
          { allFeatures.map((feature, index) => 
              <Card key={index} icon={feature.icon} title={feature.title} txt={feature.txt} />
          )}
        </div>
      </section>

      <section id="newsletter">
        <h2>Restez au courant des nouveautés</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <form>
          <input type="email" id="email" name="email" placeholder="Entre ton email" />
          <button>Envoyer</button>
        </form>
      </section>

      <section id="products">
        <h2>Nos Produits</h2>
        <div className="gallery">
          { products.map(({title, subtitle, txt, link, img}, index) => 
              <ItemGallery key={index} title={title} subtitle={subtitle} txt={txt} link={link} img={img}/>
          )}
        </div>
      </section>

      <Satisfaction />

    </main>
  )
}
