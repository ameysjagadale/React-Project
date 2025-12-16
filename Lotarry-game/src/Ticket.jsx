import TicketNumber from "./TicketNumber";
import "./Ticket.css";

export default function Ticket({ticketarry}){
   return(
    <div className="Ticketcss">
        <p>Ticket</p> 
        {ticketarry.map((num,idx)=>(
          <TicketNumber num={num} key={idx}/>
        ))
    }
    </div>
   )
}