import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './Employee'
import Company from './Company'
import MyCar from './MyCar'
import Counter from './Counter'
import Todo from './Todo'





function App() {
  const inputRef= useRef(null)
  const ref = useRef(0)
  const [count,setCount]=useState(0)
const [userName, setUserName] = useState("")

useEffect(()=>{
  inputRef.current.focus()
})

  // jss code
  var empname = "Max"
const spanStyle = {color:"blue" , fontWeight:"600"}  //inline styyle used as assigned to a variable and placing in jsx -placed in h3 tag

const showData = () =>{
  ref.current = ref.current +1
  alert(`count is: ${ref.current}`)
}

const displayData = (data) =>{
  alert(`data from argument: ${data}`)
}

const getData =(username) => {

  empName=username.value
  console.log(empName);
  //update state
  setUserName(username.value)

  
  
}

  return (
    //jsx code
    <>
    {/* inline css done inside h1 tag - uses double curly braces*/}

    <h1></h1>
    <Todo/>

   <h1 style={{textAlign:'center',color:'red'}}  > demo project</h1>
   <h3>Inside app content: <span style={spanStyle}>{empname}</span></h3>
      
      <Counter/>

        {/* event */}
        <div className='text-center my-5'>
          <button onClick={showData} className='btn btn-primary '>Show alert</button>
          <button onClick={()=>displayData(empname)} className='btn btn-success ms-5'>alert argument</button>
        </div>

        <div className='w-50 m-5 text-center' >

           <input ref={inputRef} onChange={(e)=>getData(e.target)} type="text" placeholder='enter User name' className='form-control'/>
           <h3>UserName: <span>{userName}</span></h3>
        </div>
        
       {/* eemployee */}
       <Employee dataFromParent={empname} empdesig="devloper" empstatus={false}/>
       <Company/>

       {/* class based component */}
       <MyCar/>
    </>

  )
}

export default App
