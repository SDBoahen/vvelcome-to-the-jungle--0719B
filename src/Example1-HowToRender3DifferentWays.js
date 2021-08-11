import Header from './Header';


function Example1HowToRender3DifferentWays(){


    //////// JS
        console.log("In Example1-HowToRender3DifferentWays")

        const renderAHeader =()=>{

            return(<Header />)
          }
          renderAHeader()
          const returnAHeader = <Header/>
    //////// JS


    return(<>
    
      As a Component
      <Header />

      As a Function
      {renderAHeader()}

      As a Variable
      {returnAHeader}
    
    </>)


}
export default Example1HowToRender3DifferentWays 