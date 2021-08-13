import { useState } from 'react'

import ButtonDELETE from "./ButtonDELETE"


function SubHeader(props){
    // function SubHeader({ subHeaderProp }){

    
    // <SubHeader />
    //  L>  <ButtonDELETE />
        

        console.log("In SubHeader")
        // console.log(subHeaderProp)
        console.log(props)


    // useState - Hook    
    const [wasIDeleted, changeDeletedStatus] = useState(false)
    console.log("wasIDeleted??  ::  ", wasIDeleted)

    
    const removeSubHeader =()=>{

        console.log("🎶🔔🎶")

        changeDeletedStatus(!wasIDeleted)

        // console.log("SUBHEADER REMOVED!")

    }
    // removeSubHeader()




    const renderSubHeader =()=>{


        return(

            // wasIDeleted ?  true : false

            wasIDeleted ?  
            
            //true
            
            <></>

            :
            
            //false
            <>
                <h4>{props.subHeaderProp}</h4>
        
                <ButtonDELETE functionToRemoveSubHeader={removeSubHeader} />
                {/* <ButtonDELETE deleteSatus={changeDeletedStatus} /> */}
        
                ---- In SubHeader ----
                <br></br> 
                <br></br> 
            </>

            // wasIDeleted ?  
            // true 
            // : 
            // false

        )

            // if(wasIDeleted === false){

            //     return(<>
                    
            //         <h4>{props.subHeaderProp}</h4>
            
            //         <ButtonDELETE functionToRemoveSubHeader={removeSubHeader} />
            //         {/* <ButtonDELETE deleteSatus={changeDeletedStatus} /> */}
            
            //         ---- In SubHeader ----
            //         <br></br> 
            //         <br></br> 

            //     </>)


            // }else{

            //     return(<></>)
            // }


    }




    return(<>

        {renderSubHeader()}

    </>)


}
export default SubHeader







// function SubHeader({ subHeaderProp, anotherSubHeaderProp, a, b }){


    // ()
    // F({

    // })

    // {}
    // {{{}}}
    // []




            //     {/* <h4>YAY!</h4> */}
            // {/* <h4>{subHeaderProp}</h4> */}


            //             {/* Without Destructuring */}
            // {/* <h4>{props.subHeaderProp}</h4>
            // <h4>{props.a}</h4>
            // <h4>{props.b}</h4> */}