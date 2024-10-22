import { useState } from "react";
import "./App.css";
 
// src/App.jsx

const App = () => {

  const [team,setTeam] = useState([]);
  const [money,setMoney] = useState(100);
const [zombieFighters,setZombieFighters]=useState([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  }
]
)
 const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  // Function to handle adding fighters to the team
  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      setTeam([...team, zombieFighter]);
      setMoney(money - zombieFighter.price);
      setTotalStrength(totalStrength + zombieFighter.strength);
      setTotalAgility(totalAgility + zombieFighter.agility);
    } else {
      console.log('Not enough money');
    }
  };
  //Function to handle remove the fighters from the team
  const handleRemoveFighter = (index) => {
  // Get the character to be removed based on index
  const zombieFighterToRemove = team[index];

  // Update the team by filtering out the character
  const updatedTeam = team.filter((_, i) => i !== index);

  // Update the state:
  // 1. Increase the budget by the fighter's price
  setMoney(money + zombieFighterToRemove.price);

  // 2. Adjust total strength and agility by removing the fighter's stats
  setTotalStrength(totalStrength - zombieFighterToRemove.strength);
  setTotalAgility(totalAgility - zombieFighterToRemove.agility);

  // 3. Update the team state
  setTeam(updatedTeam);
};


  

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money: ${money}</h2>
    <h3>Total Strength: {totalStrength}</h3>
    <h3>Total Agility: {totalAgility}</h3>
    
    <h3>Your Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((zombieFighter, index) => (
            <li key={index}>
              <h4>{zombieFighter.name}</h4>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}


    <div>

     <ul>
      {zombieFighters.map((zombieFighter,index) => (
        <li key={index}>
         <img src={zombieFighter.img} alt={zombieFighter.name}/>
         <h4>{zombieFighter.name}</h4> 
         <p>Price:{zombieFighter.price}</p> 
         <p>Strength:{zombieFighter.strength}</p> 
          <p>Agility:{zombieFighter.agility}</p>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        
    ))}
    </ul>
    </div>
   
    </>
  )
};

export default App;