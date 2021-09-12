import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunkUser } from "../logic/register_reducer";
import { pushNewNotifications } from '../../../redux/common/notification/notification_reducer'
import "./register.css";
export default function RegisterUI() {
  const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  const notification = useSelector(state => state.notificationReducer);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password:'',
    checkPassword:'',
    error: '',
  })

  useEffect(() =>{
    if (!notification || !notification?.message || !notification?.variant) {
      return;
    }
    enqueueSnackbar(notification.message, { variant: notification.variant });
  },[notification])
  const Register = () =>{
    if(!user.email  || !filter.test(user.email)) {
      return dispatch(pushNewNotifications({variant:'error', message:"Some thing wrong with your email"}))
    }
    if(user.password.length < 8){
      return dispatch(pushNewNotifications({variant:'error', message:"Password unsafe"}))
    }
    if(user.password !== user.checkPassword){
      return dispatch(pushNewNotifications({variant:'error', message:"Password dont same"}))
    }
    
    return dispatch(registerThunkUser(user.email, user.password))
  }

  

  return (
    <div className="register-form">
      <div className="register-left-container">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" />
        <h3>Welcome!</h3>
        <p>You are 30 seconds away from earning your own money!</p>
        <a href='/login' className='register-button-container register-button-container__login' type="submit">Login</a>
      </div>
      <div className="register-right-container">
        <div className="register-container">
          <img className="register-logo" src="https://img.icons8.com/color/100/000000/twitter--v2.png" />
          <h1 className="title">My Chanel</h1>
          <label className='register-label-container'>Email</label>
          <input className="register-input-container"   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="example@test.com" autocomplete="off" onChange={(e) => {setUser({...user,email: e.target.value})}} />
          <label className='register-label-container'>Password</label>
          <input className='register-input-container' type="password" placeholder="min 6 letter" autocomplete="off" onChange={(e) => {setUser({...user,password: e.target.value})}} />
          <label className='register-label-container'>Pasword</label>
          <input className='register-input-container' type="password" placeholder="min 6 letter" autocomplete="off" onChange={(e) => {setUser({...user,checkPassword: e.target.value})}} />
          <button className='register-button-container' onClick={Register}>Register</button>
        </div>
      </div>
    </div>
  );
}
