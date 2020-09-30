import React, { useContext } from 'react'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext'

export const LoginScreen = ({history}) => {
    
    const { dispatch } = useContext(AuthContext)

    const handleClick = () => {
        //history.push('/')
        //history.replace('/')
        const last_path = localStorage.getItem('lastpath');
        const action = {
            type: types.login,
            payload: {
                name: 'Javier'
            }
        }

        dispatch(action);

        history.replace(last_path)


    }
    
    return (
        <div className="container mt-5">
        <h1>Welcome</h1>
        <hr/>

        <button
        className="btn btn-primary"
        onClick={handleClick}
        >

            Enter
        </button>
        
        
        
        </div>
    )
}
