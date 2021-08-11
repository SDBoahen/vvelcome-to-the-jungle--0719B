import Header from './Header';


function Example2HowToRenderWithProps3DifferentWays(){


    //////// JS

    let yallAreDoing = [
      
        "Y'all Are Doing ✨PHENOMENAL✨",
        "Y'all Are Doing ✨FANTABULOUS✨",
        "Y'all Are Doing ✨DAHSINGLY✨",
        "Y'all Are Doing ✨PHENOMENAL✨",
       
     ]
     // let yallAreDoing = "Y'all Are Doing ✨GREAT✨"
 
 
     // Using a Function
     const renderHowWereDoingButAFunctionTho =()=>{
     
       return(
 
         yallAreDoing.map(eachHeaderText =>{ console.log(eachHeaderText) 
           
           return(
     
             <Header headerProp={eachHeaderText} />
     
           )
         
         })
 
       )
 
     }
     // Using a Variable 
     const renderHowWereDoing = yallAreDoing.map(eachHeaderText =>{ console.log(eachHeaderText) 
       
       return(
 
         <Header headerProp={eachHeaderText} />
 
       )
     
     })
     console.log(renderHowWereDoing)
    //////// JS


    return(<>
    
    With a Function
      {renderHowWereDoingButAFunctionTho()}


      With a Variable
      {renderHowWereDoing}

      With Components - Individally
      <Header headerProp={yallAreDoing[0]} />
      <Header headerProp={yallAreDoing[1]} />
      <Header headerProp={yallAreDoing[2]} />
      <Header headerProp={yallAreDoing[3]} />

        {/* That's Not Convesional/Encouraged */}
        {/* <Header headerProp={yallAreDoing} /> */}

        {/* <Header headerProp={"Y'all Are Doing ✨PHENOMENAL✨"} />
        <Header headerProp={"Y'all Are Doing ✨FANTABULOUS✨"} />
        <Header headerProp={"Y'all Are Doing ✨DAHSINGLY✨"} />
        <Header headerProp={"Y'all Are Doing ✨PHENOMENAL✨"} /> */}

    
    </>)


}
export default Example2HowToRenderWithProps3DifferentWays 