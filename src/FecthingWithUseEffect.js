import { useEffect, useState } from 'react'




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


    useEffect( fetchCritters(), [] )

        // useEffect(  ()=>{ console.log("In useEffct") 

        //     fetch('http://localhost:8008/junglePals')
        //     .then(response => response.json())
        //     .then(data => { console.log("From Our Fetch:  ", data) 
            
        //         setCritters(data)
            
        //     });
        //     // .then(data => console.log(data));

        // }, [] )

        // //// json-server --watch db.json -p 8008 




    return(<>
    
        <h2>FETCHING :)</h2>
        {
            critters.map(eachCritter =>{ console.log(eachCritter) 
            
                return(<h4>{eachCritter.name}</h4>)

            })
        }
        {/* {critters.map(eachCritter =>{ console.log(eachCritter) })} */}
    
    </>)


}
export default FecthingWithUseEffect