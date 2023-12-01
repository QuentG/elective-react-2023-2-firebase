import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { LOGIN } from '../reducers/AuthReducer'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const LoginForm = () => {
    const { dispatch } = useContext(AuthContext)
    const { state } = useLocation()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)

    const onSubmit = async () => {
        setError(null)

        try {
            const userResponse = await signInWithEmailAndPassword(auth, email, password)
            if (userResponse.user) {
                setTimeout(() => {
                    dispatch({ type: LOGIN, payload: userResponse.user })
                    localStorage.setItem('@user', JSON.stringify(userResponse.user))
                    navigate(state?.from ? state.from : '/')
                }, 2000)
            }
        } catch (error) {
            const errorCode = error.code
            if (errorCode === 'auth/wrong-password') {
                setError('Le mot de passe est invalide')
            } else if (errorCode === 'auth/user-not-found') {
                setError('L\'email est invalide')
            } else {
                setError('Une erreur est survenue')
            }
        }
    }

    return (
        <div>
            <h1>Login Form</h1>

            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button onClick={onSubmit} disabled={email === '' || password === ''}>Login</button>
        </div>
    )
}

export default LoginForm