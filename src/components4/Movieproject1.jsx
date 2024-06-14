import Moviecomponents from "./Moviecomponents"

import movies from "./movies.json";

const Movieproject1 = () => {
  return (
    <div className="First">


        {
          movies.map((element) => {

            return(
                 <Moviecomponents
                title={element.Title}
                year={element.Year}
                img={element.Poster}
             />

            )

           

          })
            
        }
     
      <Moviecomponents/>
      

     
    </div>
  )
}

export default Movieproject1

// arrays ko hum map kar sakte hai 

