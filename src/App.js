import React from 'react';
import './App.css';
import Button from './components/Button';
import Product from "./components/Product";
import TileFooter from "/component/Tile-footer";
import TasFotoEen from "assets/bag_1.png";
import TasFotoTwee from "assets/bag_2.png";
import TasFotoDrie from "assets/bag_3.png";
import TasFotoVier from "assets/bag_4.png";
import FotoFooter1 from "assets/brand.png";
import FotoFooter2 from "assets/our_story.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

        <nav>
          <Button
              description="to the collection"
          >
          </Button>

          <Button>
            description="shop all bags"
          </Button>

          <Button
              description='pre-order'>
          </Button>

        </nav>

        <main>
          <Product
              InformationSale= "Best-seller"
              Image = {TasFotoEen}
              NaamTas="Handybag"
              Prijs="€400,">

          </Product>

          <Product
              InformationSale= "Best-seller"
              Image = {TasFotoTwee}
              NaamTas="Stylish bag"
              Prijs="€250,">

          </Product>

          <Product
              InformationSale= "New Collection"
              Image = {TasFotoDrie}
              NaamTas="The Simple Bag"
              Prijs="€300,">

          </Product>

          <Product
              InformationSale= "New Collection"
              Image = {TasFotoVier}
              NaamTas="The trendy Bag"
              Prijs="€150,">

          </Product>


        </main>
        <footer>
          <TileFooter>
            Titel = "The Brand"
            Tekstje = "Lorem ipsum"
          </TileFooter>

          <TileFooter>
            Image = {FotoFooter1};
          </TileFooter>

          <TileFooter>
            Titel = "About us"
            Tekstje = "Lorem ipsum"
          </TileFooter>

          <TileFooter>
            Image = {FotoFooter2};
          </TileFooter>

        </footer>

      </>


      // Aanpak voor het maken van een component
// 1. Maak een components-map aan in de src
// 2. Maak een JavaScript bestandje aan (met hoofdletter!) volgens de naam van jouw component
// 3. Schrijf een functie (met hoofdletter!) die wat HTML returned
// 4. Schrijf direct de "export regel" voor die functie
// 5. Importeer jouw eigen component in App.js en geef deze weer als component
// 6. Werkt het? Top! Dan kun je verder!
// 7. Plak de originele HTML in jouw custom component
// 8. Bekijk welke data dynamisch moet zijn en bedenk daar property-namen voor. Voeg die ook toe bovenaan de functie.
// 9. Geef de informatie door via App.js onder de juiste benamingen!
  );
}

export default App;



