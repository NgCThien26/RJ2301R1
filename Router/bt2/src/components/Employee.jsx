import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Employees from "../data/Data";

function Employee() {
    const { username } = useParams()
    const navigate = useNavigate()
    
    function handleDetail(id) {
        navigate(`/employeedetail/${id}`)
    }
    return (
    <>
        <div>
            <h3>Chào bạn {username}</h3>
            <table>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                {Employees.map(e=>(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td><button onClick={()=>handleDetail(e.id)}>Detail</button></td>
                    </tr>
                ))}
            </table>
        </div>
    </>)
}

export default Employee