
import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import {doLogin} from '../../../../src/redux/actions/AuthAction'



export default function UseSignIn() {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    const doLoginUser = ()=>{
        dispatch(doLogin(email,password))
    }

    return [data , email , password , setData , setEmail,setPassword,doLoginUser]
}