import SubHeader from "./SubHeader"

import ButtonDELETE from "./ButtonDELETE"




function Header(props){


    //////// JS
        console.log("In Header")
        console.log(props)

        const clickHandlerForH1 =()=>{

            console.log("yay! i got clicked ^.^")

        }
    //////// JS


    return(<>
    
            <h1 style={{color: "magenta"}}
                onClick={clickHandlerForH1}  
            >
                {props.headerProp}
            </h1>
        
            <SubHeader 
                subHeaderProp={"I'm Doing My Best 🙌🏾"}
                // subHeaderPropFromHeader={"I'm Doing My Best 🙌🏾"}
                anotherSubHeaderProp={"Yeah!"}  
                a={"a"}
                b={"b"}
            />
            <ButtonDELETE />---- Doesn't Have The Function  :(
               
    
    </>)


}
export default Header 




        // // MOVE THIS !!!!
        // const clickHandlerForIMG =()=>{

        //     console.log("Look at all those cuties ✨🥺✨")

        // }
// {/* <div className="h1-Card"

//          onClick={clickHandlerForH1}  

//         >
    
//         <h1 style={{color: "magenta"}}

//         >
//             {props.headerProp}
//         </h1>
//         <h1 style={{color: "magenta"}}

//         >
//             {props.headerProp}
//         </h1>
//         <h1 style={{color: "magenta"}}

//         >
//             {props.headerProp}
//         </h1>

//         <img 
//             src="https://cdn2.bulbagarden.net/upload/thumb/d/db/Aether_Paradise_Quagsire.png/250px-Aether_Paradise_Quagsire.png" 
//             alt="Quagsire" 
//             onClick={clickHandlerForIMG}
//         />

//         </div> */}
//         {/* <h1 style={{color: "magenta"}}>Y'all Are Awesome!</h1> */}