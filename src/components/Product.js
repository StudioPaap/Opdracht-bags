import React from "react";


function Product({ Image, InformationSale, NaamTas, Prijs} ){
    return(
        <article>
    <span> {InformationSale}
    </span>
            <img src={Image} > </img>
            <p>{NaamTas}</p>
            <h4>{Prijs}</h4>
        </article>);
};




export default Product