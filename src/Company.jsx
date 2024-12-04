//rfce   - for normal function
//rafce  - for arrow function

import React from 'react'
import myStyle from "./style.module.css"

const Company = () => {
    const allEmp=[
        {empName:"Max" , empDesig:"Devloper" , Salary:"45000"},
        {empName:"Arun" , empDesig:"Tester" , Salary:"30000"},
        {empName:"Ajay" , empDesig:"Hacker" , Salary:"50000"},
        {empName:"Kiran" , empDesig:"Manager" , Salary:"70000"},

    ]


  return (
    <div>
        <h1 className={myStyle.headStyle}>All employee list</h1>
        <table className='table container'>
            <thead> 
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Designation</td>
                    <td>Salary</td>
                </tr>
                </thead>
                    <tbody>
                        {
                            allEmp.map((emp,index)=>(
                                <tr key={emp.empName}>
                                <td>{index+1}</td>
                                <td>{emp.empName}</td>
                                <td>{emp.empDesig}</td>
                                <td>{emp.Salary}</td>
                            </tr> 
                            ))
                           
                        }
                        </tbody>        
        </table>
    </div>
  )
}

export default Company