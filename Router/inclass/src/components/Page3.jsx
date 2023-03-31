import {useNavigate, useParams } from "react-router-dom"
const Page3 = () => {
    const params = useParams()
    const navigate = useNavigate()

    const gotoPage2 = () => {
        navigate("/layout/page2")
    }
    return (
        <>
        
        <p>This is page 3, id is: {params.id}</p>
        <button onClick={gotoPage2}>Chuyển sang trang 2</button>
        </>
        
    )
}
export default Page3