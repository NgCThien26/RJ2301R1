import React from "react"
import { useNavigate } from "react-router-dom"
const Page2 = () => {
    const navigate = useNavigate()

    return (
        <>
        <p>This is page 2</p>
        <button onClick={() => navigate('/layout/page1')}>Go to page 1</button>
        </> 
    )
}
export default Page2