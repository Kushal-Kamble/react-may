import Propsconcepts2 from "./Propsconcepts2"

// const Propsconcept1 = (props) => {
//   return (
//     <div>
//       <h2>Props Concept padh rh ahoo bhai </h2>
//       <h3>{props.name}</h3>
//       <h3>{props.age}</h3>
//       <h3>{props.place}</h3>
//     </div>
//   )
// }

// export default Propsconcept1


// 2 second method object ki help se


const Propsconcept1 = ({name, age, place}) => {
    return (
      <div>
        <h2>Props Concept padh rh ahoo bhai </h2>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{place}</h3>

        <Propsconcepts2 name={name}/>
      </div>
    )
  }
  
  export default Propsconcept1




// 2


// ek components ke andar dusra components jaise humne header me footer dala tha

// basically components a ki value b aur c me pass krna hai to props ka use krna hai

// maine value app.js me di hai aur get me propconcept1 me kar rha hoo props ki helo se