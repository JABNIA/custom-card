import React, { ChangeEvent, useContext, useState } from 'react'
import './Forms.css'
import { cardContext } from './Desk'



type cardNumber = {
    setNumber : React.Dispatch<React.SetStateAction<string>>,
    isNumber : (value:string) => boolean,
    setName : React.Dispatch<React.SetStateAction<string>>,
    setCvc : React.Dispatch<React.SetStateAction<string>>,
    setMonth : React.Dispatch<React.SetStateAction<string>>,
    setYear : React.Dispatch<React.SetStateAction<string>>
}


export default function Forms(props:cardNumber) {

    const cardData = useContext(cardContext)
    const [confirm, setConfirm] = useState(false)   
    
    if(confirm){
        return(
            <div id='thanx-wrapper'>
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
                
                <h2>THANK YOU!</h2>
                <p>We've added your card details</p>
                
                
                <button className='btn' onClick={()=> {
                    props.setName("")
                    props.setNumber("")
                    props.setMonth("")                    
                    props.setYear("")                    
                    props.setCvc("")
                    setConfirm(false)                    
                }}>Continiue</button>

            </div>
        )
    }else{

        
        
        
        return (
            
            <div id="forms-wrapper">
            <form>
                <div className="input-wrapper">
                <label htmlFor="name">CARD HOLDER NAME</label>
                <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) =>{
                    props.setName(event.target.value ) 
                } } name='name' className='card-info' placeholder='e.g. Jane Appleseed'/>
                </div>

                <div className="input-wrapper">
                <label htmlFor="number">CARD NUMBER</label>
                
                <input 
                type="text" 
                maxLength={16} 
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    props.setNumber(event.target.value)
                }} 
                name='number'
                className={props.isNumber(cardData.number) ? 'card-info' : 'card-info invalid-format' }
                placeholder='e.g. 1234 5678 9123 000'
                value={cardData.number}
                />
                
                <p style={{color: "red"}}>{props.isNumber(cardData.number) ? "" : "Only input Numbers"}</p>
                
                </div>  

                <div className="input-wrapper">
                    <div className='exp-wrapper'>
                    <div>
                        <label htmlFor="">EXP. DATE (MM/DD)</label>
                        
                        <input 
                        type="text" 
                        maxLength={2} 
                        name='month' 
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            props.setMonth(event.target.value)
                        }}
                        className={props.isNumber(cardData.month) ? 'card-info month' : 'card-info invalid-format month' } 
                        placeholder='MM'/>
                        
                        <input 
                        type="text" 
                        maxLength={2} 
                        name='year' 
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            props.setYear(event.target.value)
                        }}
                        
                        className={props.isNumber(cardData.year) ? 'card-info year' : 'card-info invalid-format year'} 
                        placeholder='YY'/>
                        <div className="errors">
                        <p style={{color: "red", width: "200px"}}>{cardData.month && cardData.year !== "" ? "" : "Can't be blank"}</p>
                        <p style={{color: "red"}}>{(props.isNumber(cardData.month) && props.isNumber(cardData.year)) ? "" : "Only input Numbers"}</p>
                        </div>

                </div>

                    <div style={{display:"flex", flexDirection: "column"}}>
                        <label htmlFor="cvc">CVC</label>
                        <input 
                        type="text" 
                        maxLength={3} 
                        name='cvc' 
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            props.setCvc(event.target.value)
                        }}
                        className={props.isNumber(cardData.cvc) ? 'card-info sec-code' : 'card-info invalid-format sec-code'} 
                        placeholder='e.g. 123'/>
                        <div className="errors">
                        <p style={{color: "red", width: "200px"}}>{cardData.cvc !== "" ? "" : "Can't be blank"}</p>
                        <p style={{color: "red"}}>{props.isNumber(cardData.cvc) ? "" : "Only input Numbers"}</p>
                        </div>
                    </div>

                    </div>
                </div>
                <button className='btn' onClick={()=> {
                    setConfirm(true)                    
                }}>Confirm</button>
            </form>
        </div>
    )
}
}