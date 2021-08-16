import { useEffect, useState } from 'react'
import Critter from './Critter'




const FecthingWithUseEffect =()=>{
      console.log("In FecthingWithUseEffect")


    const [critters, setCritters] = useState([])
        console.log("State of our critters[ ", critters, " ]")


        const fetchCritters=()=>{ console.log("In useEffct") 

            fetch('http://localhost:8008/junglePals')
            .then(response => response.json())
            .then(data => { console.log("From Our Fetch:  ", data) 
            
                setCritters(data)
            
            });

        }


    useEffect( fetchCritters, [] )

        // useEffect(  ()=>{ console.log("In useEffct") 

        //     fetch('http://localhost:8008/junglePals')
        //     .then(response => response.json())
        //     .then(data => { console.log("From Our Fetch:  ", data) 
            
        //         setCritters(data)
            
        //     });
        //     // .then(data => console.log(data));

        // }, [] )

        //// json-server --watch db.json -p 8008 




        const deleteACritter =(critterToDelete)=>{
            console.log("Sorry", critterToDelete, " :(")

            let crittersStaying = critters.filter( eachCritter => eachCritter.id != critterToDelete.id)
                setCritters(crittersStaying)
            
        }
        //X//
        // const gettingCritterToDeleteInSameScope =()=>{
        // }




    return(<>
    
        <h2>FETCHING :)</h2>
        {
            critters.map(eachCritter =>{ console.log(eachCritter) 
            
                return(<>
                        <Critter key={eachCritter.id}
                            critterToRender={eachCritter}
                            byebyeCritter={deleteACritter}
                         />
                       </>)
                // return(<>
                //     <h4>
                //      {eachCritter.name}
                //     </h4>
                //     </>)

                    //X//
                    // return(<>
                    //     <h4 
                    //         onClick={deleteACritter}
                    //         >
                    //     {eachCritter.name}
                    //     </h4>
                    //     </>)

            })
        }
        {/* {critters.map(eachCritter =>{ console.log(eachCritter) })} */}
    
    </>)


}
export default FecthingWithUseEffect