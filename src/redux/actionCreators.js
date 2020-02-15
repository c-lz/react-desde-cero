import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from "./actions"
import Axios from "axios"

const
    addToCart=id=>({
        type: ADD_TO_CART,
        id
    }),
    deleteFromCart=id =>({
        type: DELETE_FROM_CART,
        id
    }),
    getCourseList = () => dispatch =>{
        Axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos')
        .then(res=>{
            return dispatch({
                type: GET_COURSE_LIST,
                courses: res.data
            })
        })
    }

export {
    addToCart,
    deleteFromCart,
    getCourseList
}