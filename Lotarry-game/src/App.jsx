import './App.css'
import Lotery from './Lotery.jsx';
//import TicketNumber from './TicketNumber.jsx';
import Ticket from './Ticket.jsx';  
import { sum } from './helper.js';

function App() {

 let wincondition=(ticket)=>{
    return sum(ticket)===20;
 }
  return (
    <>
      {/* <Lotery n={4} winningSum={15}/> */}
      <Lotery n={4} wincondition={wincondition}/>
      
    </>
  )
}

export default App;
