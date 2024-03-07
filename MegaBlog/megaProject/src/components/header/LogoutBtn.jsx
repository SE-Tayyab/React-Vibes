import React from 'react'
import {useDispatch } from 'react-redux'
import { AuthService } from '../../appWrite/auth'
// import { logout } from '../../store/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        AuthService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={()=>logoutHandler}
    >Logout</div>
  )
}

export default LogoutBtn