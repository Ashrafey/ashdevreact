
import './Employee.css'

function Employee(props){
    console.log(props);




//it is a component. it should start with a capital letter.the funtion name should be components name
// function Employee(){
    return(
        <div>
            <h3 className="head newColor">employee details!!!!</h3>
           <h3>data from parent : <span className="headColor">{props.dataFromParent}</span></h3>
           <h2>designation: {props.empdesig}</h2>
           <h2>Employee status: {props.empstatus ? <span className="text-success">active</span> : <span className="text-danger">Inactive</span>}</h2>
        </div>
    )
}
export default Employee
