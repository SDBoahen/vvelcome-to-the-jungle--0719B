import './App.css';

import Header from './Header';
{/* <Header /> */}

import Example1HowToRender3DifferentWays from './Example1-HowToRender3DifferentWays';
import Example2HowToRenderWithProps3DifferentWays from './Example2-HowToRenderWithProps3DifferentWays';




function App() {
  



  //////// Ideally - Vanilla JavaScript

  
    const cLPlease =()=>{
      
      console.log("In App!")

    }
    cLPlease()


  //////// Ideally - Vanilla JavaScript








  //////// Ideally - Pure HTML


    return (<>

            <Header 
            
              headerProp={"CLICK-ME :)"}

              //X// onClick={console.log("yay! i got clicked ^.^")}
            
            />

            {/* <Example1HowToRender3DifferentWays /> */}

            {/* < Example2HowToRenderWithProps3DifferentWays /> */}

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