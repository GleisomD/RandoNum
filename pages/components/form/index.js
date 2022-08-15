import React, { Fragment } from "react"


const Form = () => {
    return (
        <form id="form">
                <label for="minNum">Escolha um número:</label>
                <input type="text" id="minNum"></input>
                <label for="maxNum">Digite mais um número:</label>
                <input type="text" id="maxNum"></input>
                <button type="submit">Gerar!</button>    
        </form>
    )
}

export default Form;