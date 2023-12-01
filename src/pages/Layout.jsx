import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"
import '../assets/navbar.css'
import { Fragment, useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { LOGOUT } from "../reducers/AuthReducer"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"

const Layout = () => {
    const { state, dispatch } = useContext(AuthContext)

    const onLogout = async () => {
        await signOut(auth)
            .then(() => {
                localStorage.removeItem('@user')
                dispatch({ type: LOGOUT })
            })
            .catch(error => console.log('SignOut error ->', error))
    }

    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/todos'>Todos</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                {state.isLogged ? (
                    <Fragment>
                        <NavLink to='/settings'>Settings</NavLink>
                        <button onClick={onLogout}>Logout</button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </Fragment>
                )}
            </nav>

            <Outlet />
        </div>
    )
}

export default Layout