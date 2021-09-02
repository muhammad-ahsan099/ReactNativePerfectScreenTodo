
import axios from 'axios';
import { endPoint } from '../endPoint/EndPoint';
import { LOGIN , LOGOUT , SIGN_UP} from '../type/Type';
export const doSignUp = (user) => async (dispatch) => {
  try {

    // const userCredential = await auth().createUserWithEmailAndPassword(user.email, user.password );
    // http://localhost:5000/auth/signup

    let payload = user ;
    let userCredential = await axios.post(`${endPoint}/auth/signup`, payload);
    

    var userData = userCredential.user;
    console.log("user", userData);

    // await db.collection('users').add({
    //     ...user ,
    //     uid : userData.uid,
    // })
    dispatch({
      type: SIGN_UP,
      payload: userData,
    });

  } catch (error) {
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};

// Logout Function 










