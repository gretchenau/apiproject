import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)

    let history = useHistory()

    useEffect(() => {
        if(token['mytoken']) {
            history.push('/articles')
        }
    }, [token])

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => setToken('mytoken', resp.token))
        .catch(error => console.log(error))
    }

    const registerBtn = () => {
        APIService.RegisterUser({username, password})
        .then(() => loginBtn())
        .catch(error => console.log(error))
    }

    return (
        <div className="App">
            <br/>
            {isLogin ? <h1>Please login</h1> : <h1>Please register</h1>}
            
            <br/><br/>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Please enter username" 
                value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" placeholder="Please enter password" 
                value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {isLogin ? <button onClick={loginBtn} className="btn btn-primary">Login</button> 
            : <button onClick={registerBtn} className="btn btn-primary">Register</button>}
            
            <div className="mb-3">
            <br/>
                {isLogin ? <h5>If you don't have Account, 
                    Please <button className="btn btn-primary" 
                    onClick={() => setLogin(false)}>Register</button>here</h5> 
                : <h5>If you have Account, Please <button className="btn btn-primary" 
                onClick={() => setLogin(true)}>Login</button>here</h5>
                }
            </div>
        </div>
    )
}

export default Login;
