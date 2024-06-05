import { NavLink } from "react-router-dom";

function Pages(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/login">login</NavLink>
                    </li>
                    <li>
                    <NavLink to="/signup">signup</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pages;