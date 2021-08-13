import { useState } from 'react'


function ButtonDELETE({ functionToRemoveSubHeader }){

    // function ButtonDELETE(props){
    // console.log(props) 
    // <ButtonDELETE functionToRemoveSubHeader={removeSubHeader} />


    const [clicked,  toggleClick] =  useState(false)
    //    [variable, function()]   =  useState(defaultValue)
    

    const deleteClickHandler=()=>{

        // let c = !clicked
        toggleClick(!clicked)
        // console.log("DELETE THAT! 🚮")


        functionToRemoveSubHeader()  // removeSubHeader In PARENT
        console.log("🎶🎶🎶👂")
        // props.functionToRemoveSubHeader()        


        // fetch()

    }
    console.log(clicked)
    



    return(<>

        <button onClick={deleteClickHandler}>[X]</button>
        {/* <button onClick={ ()=>{ toggleClick(!clicked) } }>[X]</button> */}

        {/* {deleteText()} */}
        

    </>)


}
export default ButtonDELETE













    // const deleteText =()=>{
    //     return(<>
    //     <h2>DE-LE-TE</h2>
    //     <h2>DE-LE-TE</h2>
    //     <h2>DE-LE-TE</h2>
    //     <img src={""} alt={""} />
    //         </>)
    // }