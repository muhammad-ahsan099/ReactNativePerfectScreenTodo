import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { doSignUp } from '../../../redux/actions/AuthAction';


export default function UseSignUp() {
    const [data, setData] = useState({
        name: '',
        email: '' ,
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });


    const [name , setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()


    const doSignupUser = ()=>{

        let user = {
            name ,            
            email ,
            password ,
            createdAt: new Date()
        }
        dispatch(doSignUp(user))

        setName("")
        setEmail("")
        setPassword("")
    }

    return [ data , name , email , password,setData , setName ,setEmail,setPassword , doSignupUser]
}