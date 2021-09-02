import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import store from '../../config/Store';


import { addStudent } from "../../redux/actions/StudentAction";


export function UseAddStudent() {


    const [data, setData] = useState({
        name: '',
        rollno: '',
        semes: '',
        cgpa: '',
        myClass: '',
        check_textInputChange: false,

    });

    const [errMessage, setMessage] = useState("");
    const [flag, setFlag] = useState(false)
    const [updatedIndex, setUpdatedIndex] = useState(0);
    // New Hooks Defined
    const [load, setLoading] = useState(false);
    const [ctaLoading, setCtaLoading] = useState(false);

    const dispatch = useDispatch();


    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [semes, setSemes] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [myClass, setmyClass] = useState("")

    // const students = useSelector(state => state.studentReducer.students)
    // const students = useSelector(state => state.StudentReducer.students)

    // console.log("Students from studentReducer", students);
    // setStudent(students)


    // Delete Handler 

    // CTA Handler 
    const ctaHandler = () => {

        setMessage("")
        if (name !== "" && rollno !== "" && semes !== "" && cgpa !== "" && myClass !== "") {
            let student = {

                name,
                rollno,
                semes,
                cgpa,
                myClass,
                createdAt: new Date()

            }

            console.log('Student Data:  ', student);
            // setStudent([...students , student])
            dispatch(addStudent(student, setCtaLoading))

            setName("")
            setRollno("")
            setSemes("")
            setCgpa("")
            setmyClass("")
        }

        else {
            setMessage("Error: Some Inputs are Empty");
        }

    }




    return [data, errMessage, flag, name, rollno, semes, cgpa, myClass, load, ctaLoading, setData, setName, setRollno, setSemes, setCgpa, setmyClass , ctaHandler]

}
