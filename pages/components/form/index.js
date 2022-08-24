import React, { Fragment } from "react"


const Form = () => {
    return (
        <form>
                <label htmlFor="minNum">Escolha um número:</label>
                <input type="text" id="minNum"></input>
                <label htmlFor="maxNum">Digite mais um número:</label>
                <input type="text" id="maxNum"></input>
                <button type="submit">Gerar!</button>    
        </form>
    )
}

export default Form;