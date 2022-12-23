import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from "./DataContext";


const Nav = () => {
  const data = useContext(DataContext)
console.log(data)
    return(
        <div className="navigationbar">
            <Link to="/"> Home </Link>
            {!data.userInfo.isLoggedIn && <Link to="/register"> Sign Up </Link>}
            {!data.userInfo.isLoggedIn && <Link to="/signin"> Log In </Link>}
            {data.userInfo.isLoggedIn && <Link to="/logout" onClick={()=>data.setUserInfo({loggedIn:false})}> Log Out </Link>}
            {data.userInfo.isLoggedIn && <span>Welcome {data.userInfo.username}</span>}

            </div>
 )           
}

export default Nav
