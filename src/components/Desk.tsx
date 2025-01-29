import { useState }from "react";
import "./Desk.css"
import Decoration from "./Decoration";
import Card from "./Card"
import Forms from "./Forms";
import { createContext } from "react";


export const cardContext = createContext({
    number: "",
    name: "",
    cvc: "",
    month: "",
    year: ""    
})



export default function Desk(){
    const [number, setNumber] = useState("");
    // const [isNumber, setIsNumber] = useState(true);
    const [name, setName] = useState("")
    const [cvc, setCvc] = useState("000")
    const [month, setMonth] = useState("00")
    const [year, setYear] = useState("00")


const validNum = (value: string) => {

        const regex = /^\d{0,16}$/;
        
        if (regex.test(value)){
            return true
        }else if(value === ""){
            return true
        }
        else{
            return false
        }        
    }


    return (
        <div id="desk-wrapper">
            <cardContext.Provider value={{
                number: number,
                name: name,
                cvc: cvc,
                month: month,
                year: year
                }}>
            <Decoration />
            <Card />
            <Forms 
                setNumber={setNumber}
                isNumber={validNum}
                setName={setName} 
                setCvc={setCvc} 
                setMonth={setMonth} 
                setYear={setYear} /> 
            </cardContext.Provider>
        </div>
    )
}