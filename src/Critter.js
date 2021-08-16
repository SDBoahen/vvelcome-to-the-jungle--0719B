
const Critter =(props)=>{

        const localDeleteHandler =()=>{

            props.byebyeCritter(props.critterToRender)
        }

    return(<>
    
        <h4 
            onClick={localDeleteHandler}
            //X// onClick={props.byebyeCritter(props.critterToRender)}
        >
        {props.critterToRender.name}
        </h4>
        

    </>)


}
export default Critter