import React, {useState, useContext} from "react";

import { createSession } from "../../services/api";

import { AuthContext } from "../../context/auth";

import "./styles.css"

  const LoginPage = () => {
    const { authenticated, user, login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [passsword, setPassword] = useState('')

    const handleLogin = async () => {
            console.log('email', email)
            console.log(' passsword', passsword)
        login(email, passsword)

        const response = await createSession(email, passsword)
        console.log('login',  response.data) 
        }

    return (
    <div id="login">
        <h1 className="title">Login</h1>
  
        <p>Authenticated: {JSON.stringify(authenticated)} </p>
        <p> Email: {JSON.stringify(user)} </p>
        <div className="form">
            <div className="field"> 
                <label htmlFor="email"> Email: </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>   
            </div>

            <div className="field">
                <label htmlFor="passsword"> Senha: </label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={passsword}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>

        <div className="actions">
            <button onClick={handleLogin}>Entrar</button>
        </div>
        </div>
    </div>
)
}
export default LoginPage