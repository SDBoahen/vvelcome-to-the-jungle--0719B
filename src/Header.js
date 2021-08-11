function Header(props){


    //////// JS
        console.log("In Header")
        console.log(props)

        const clickHandlerForH1 =()=>{

            console.log("yay! i got clicked ^.^")

        }

        
        // MOVE THIS !!!!
        const clickHandlerForIMG =()=>{

            console.log("Look at all those cuties ✨🥺✨")

        }


    //////// JS


    return(<>
    
            <h1 style={{color: "magenta"}}
                onClick={clickHandlerForH1}  
            >
                {props.headerProp}
            </h1>
        
        {/* <div className="h1-Card"

         onClick={clickHandlerForH1}  

        >
    
        <h1 style={{color: "magenta"}}

        >
            {props.headerProp}
        </h1>
        <h1 style={{color: "magenta"}}

        >
            {props.headerProp}
        </h1>
        <h1 style={{color: "magenta"}}

        >
            {props.headerProp}
        </h1>

        <img 
            src="https://cdn2.bulbagarden.net/upload/thumb/d/db/Aether_Paradise_Quagsire.png/250px-Aether_Paradise_Quagsire.png" 
            alt="Quagsire" 
            onClick={clickHandlerForIMG}
        />

        </div> */}
        {/* <h1 style={{color: "magenta"}}>Y'all Are Awesome!</h1> */}
    
    </>)


}
export default Header 