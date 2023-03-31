import './Layout.css'
import { NavLink, Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
        <h1>Layout</h1>
        <ul>
            <li><NavLink to="/layout/page1" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active-link': ''}>Go to page 1</NavLink></li>
            <li><NavLink to="/layout/page2" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active-link': ''}>Go to page 2</NavLink></li>
            <li><NavLink to="/layout/page3/3" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active-link': ''}>Go to page 3</NavLink></li>

        </ul>
        <Outlet/>
        </>
    )
}
export default Layout