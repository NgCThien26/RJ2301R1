import { useParams } from "react-router-dom"
import Employees from "../data/Data"

function EmployeeDetail() {
    
    const id = parseInt(useParams().id)
    const index = Employees.findIndex(e=>(e.id===id))
    const employee = Employees[index]
    return (
        <>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Age: {employee.age}</p>
        </>
    )
}

export default EmployeeDetail