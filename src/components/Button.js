import React from "react";

function Button(description) {
    return (
        <button type="button" onClick={() =>
        console.log(description)}>
            <p> {description}</p>

        </button>

    );

}

export default Button