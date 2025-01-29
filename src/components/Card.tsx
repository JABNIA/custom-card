import {useContext} from "react"
import "./Card.css"
import { cardContext } from "./Desk"



export default function Card() {

    const cardNumber = useContext(cardContext)

    return(
        <div id="card-wrapper">
            <div id="card-front">
                <div id="white-circle">
                    
                </div>
                <div id="empty-circle">

                </div>
                <p>{`${cardNumber.number === '' ? "0000 0000 0000 0000" : `${cardNumber.number.substring(0,4)} ${cardNumber.number.substring(4,8)} ${cardNumber.number.substring(8, 12)} ${cardNumber.number.substring(12)}`}`}</p>
                <div id="card-info">
                    <p>{`${cardNumber.name === "" ? "CARDHOLDER NAME" : cardNumber.name}`}</p>
                    <p>{`${cardNumber.month === "" ? "00" : cardNumber.month}/${cardNumber.year === "" ? "00" : cardNumber.year} `}</p>
                </div>
            </div>
            <div id="card-back">
                <p id="ccv">{`${cardNumber.cvc === "" ? "000" : cardNumber.cvc}`}</p>
            </div>
        </div>
        )

}