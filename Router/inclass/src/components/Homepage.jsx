import { Link } from "react-router-dom"
import React from "react"
const Homepage = () => {
    return(
       <>
       <h1>Home Page Menu</h1>
       <ul>
        <li><a href="/page2">Go to page 2</a></li>
        <li><Link to="/page2">Go to page 2</Link></li>

       </ul>
       </>
    )
}
export default Homepage