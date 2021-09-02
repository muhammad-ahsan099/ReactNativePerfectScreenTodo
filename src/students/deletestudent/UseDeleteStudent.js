import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../config/Store';

import { fetchStudents ,deleteStudent } from "../../redux/actions/StudentAction"

const numberOfItemsPerPageList = [2, 3, 4];
const items = [
    {
        key: 1,
        name: 'Page 1',
    },
    {
        key: 2,
        name: 'Page 2',
    },
    {
        key: 3,
        name: 'Page 3',
    },
];


export function UseDeleteStudent() {

    const [page, setPage] = useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
    const [load, setLoading] = useState(false);

   
    const dispatch = useDispatch();


    // const students = useSelector(state => state.studentReducer.students)
    const students = useSelector(state => state.StudentReducer.students)

    // console.log("Students from studentReducer", students);
    

    useEffect(() => {
        dispatch(fetchStudents(setLoading))
    }, [])

    
    const deleteHandler = (_id) => {
        console.log("Delete Handler is called" , _id);
        dispatch(deleteStudent(_id, setLoading))
    };


    return [  students , page , numberOfItemsPerPage , load ,items ,numberOfItemsPerPageList , setPage , onItemsPerPageChange , setLoading , deleteHandler ]


}
