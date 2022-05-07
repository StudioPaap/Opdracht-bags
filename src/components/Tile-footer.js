import React from "react";


function TileFooter(Titel,Tekstje, Image){
   if(Titel){
       return(

        <section>
            <h2>
                {Titel}
            </h2>
            <p> {Tekstje} </p>

        </section>
       );
   }
else {
    return(
        <section>
            <img src={Image}> </img>
        </section>
    )
   }

}

export default TileFooter;