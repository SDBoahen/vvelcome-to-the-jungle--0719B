import './App.css';

import Header from './Header';
{/* <Header /> */}
import SubHeader from './SubHeader';
{/* <SubHeader /> */}

import ButtonDELETE from './ButtonDELETE';
{/* <ButtonDELETE /> */}


import Example1HowToRender3DifferentWays from './Example1-HowToRender3DifferentWays';
import Example2HowToRenderWithProps3DifferentWays from './Example2-HowToRenderWithProps3DifferentWays';

import FecthingWithUseEffect from './FecthingWithUseEffect';



function App() {
  // Parent Component

  
  // < App />
  //   L>  <Header />
  //     L>  < SubHeader />


  // < App />
  //   L>  < SubHeader />




  //////// Ideally - Vanilla JavaScript

  
    const cLPlease =()=>{
      
      console.log("In App!")

    }
    cLPlease()

    const myName = "Sam"


  //////// Ideally - Vanilla JavaScript








  //////// Ideally - Pure HTML


    return (<>


            <Header headerProp={myName}/>
            {/* <ButtonDELETE /> */}


            {/* <Header 
            
              headerProp={"CLICK-ME :)"}

              //X// onClick={console.log("yay! i got clicked ^.^")}
            
            /> */}


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <SubHeader subHeaderProp={"Woobly"} /> */}
            {/* <SubHeader subHeaderPropFromApp={"Woobly"} /> */}


            {/* <Example1HowToRender3DifferentWays /> */}

            {/* < Example2HowToRenderWithProps3DifferentWays /> */}

            < FecthingWithUseEffect />

    </>);


  ////////



}
export default App;








// console.log();

// // 
// <div>

//   <h1>Header</h1>
//   <h1>Header</h1>
//   <h1>Header</h1>

// // 
// </div>
// <h2>HeaderJoobly</h2>
// <input type="text" />