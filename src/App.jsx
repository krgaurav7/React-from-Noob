import { useState } from "react"

function App() {

  let [Counter, setCounter] = useState(10);
  //Hooks : // useState is a Hook that lets you add React state to function components.

  const addValue = () =>{
    console.log("Value of Counter = ", Counter)
    if(Counter >=20 ){
      alert("Counter value cann't be more than 20")
    } else{
      Counter = Counter + 1;
      setCounter(Counter)
    }
  }

  const removeValue = () =>{
    console.log("Value of Counter = ", Counter)
    if(Counter <=0 ){
      alert("Counter value cann't be less than 0")
    } else {
      Counter= Counter - 1;
      setCounter(Counter)
    }
  }

  const [dayNight, setDayNight] = useState("Day");
  const DayNight = () => {
    if (dayNight === "Day") {
      setDayNight("Night");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setDayNight("Day");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  //let Counter = 10
  return (
  <div>
    <div class="Data" style={{textAlign: "center", marginTop: "20px", fontFamily: "Arial, sans-serif", justifyContent: "center", alignItems: "center"}}>
      <h1> Assignment 1st in react </h1>
      <p>Value of Counter = {Counter}</p>

      <button onClick = {addValue} style={{margin: "10px", padding: "10px", borderRadius: "5px", backgroundColor: "lightblue", color: "black"}}>
      Add Value</button>
      
      <br />

      <button onClick ={removeValue} style={{margin: "10px", padding: "10px", borderRadius: "5px", backgroundColor: "lightblue", color: "black"}}
      > Remove Value</button>

      <footer> Updated Value of Counter = {Counter}</footer>
      <button class="DN" onClick = {DayNight} style={{margin: "10px", padding: "10px", borderRadius: "5px", backgroundColor: "red", color: "black"}}
      >Day/Night</button>
    </div>
  </div>
  )
}

export default App
