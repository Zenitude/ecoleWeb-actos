import { useState, useEffect } from "react";
import Satisfaction from "../../components/Satisfaction/Satisfaction";
import { pricesData } from "../../utils/datas/prices";

export default function Prices() {
  const [ index, setIndex ] = useState(0);
  const [ options, setOptions ] = useState(pricesData[0].options);

  useEffect(() => setOptions(pricesData[index].options), [index]);

  return (
    <main className="main main-prices">

      <section id="prices">
        <h1>Trouvez ce qu'il vous faut</h1>
        <div className="table">
          
          <div className="btns">
            { pricesData.map((price, index) => 
              <button key={index} data-id={index} onClick={() => setIndex(index)}>{price.name}</button>
            )}
          </div>

          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Taille</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prix</td>
                <td>{options.price}€/mois</td>
              </tr>
              <tr>
                <td>Nombre de sites web</td>
                <td>{options.sites}</td>
              </tr>
              <tr>
                <td>Comptes mails</td>
                <td>{options.mails}</td>
              </tr>
              <tr>
                <td>Bande passante</td>
                <td>{options.bandwidth} GB</td>
              </tr>
              <tr>
                <td>Certificat SSL</td>
                <td>{options.ssl}</td>
              </tr>
              <tr>
                <td>Sauvegarde quotidienne</td>
                <td>{options.save}</td>
              </tr>
              <tr>
                <td>CMS</td>
                <td>{options.cms.join(', ')}</td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </section>

      <Satisfaction />

    </main>
  )
}
