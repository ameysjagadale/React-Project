import {useState} from "react";
import {getTicket, sum} from "./helper";
import Ticket from "./Ticket.jsx";
import Button from "./button.jsx";

export default function Lotery({n,wincondition}){
    //export default function Lotery({n,winningSum}){

    let [ticket ,setticket]=useState(getTicket(n));
    // let winning=sum(ticket)===winningSum;
     let winning=wincondition(ticket);

    let newTicket=()=>{
        setticket(getTicket(n));
    };
    
    return(

        <div>
            <h1>Lotery Game</h1>
            <h4>try for your luck!</h4>
            
            <Ticket ticketarry={ticket}/>

            <br />  
            {/* <button onClick={newTicket}>Buy new Ticket</button> */}
            <Button action={newTicket}  />
            <h2>{winning && "congratulation, you won!"}</h2>
        </div>
        

    )
}