
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

// Login Function 

export const doLogin = (email, password) => async (dispatch) => {
    try {
      
      let payload = {email , password}
      console.log("Payload Email: " , payload.email)
      console.log("Payload Password: " , payload.password)


      const userCredential = await axios.post(`${endPoint}/auth/login`,  payload );

      var user = userCredential;
      console.log("User Data, (Email and Password) ", user);
      dispatch({
        type: LOGIN,
        payload: user,
      });
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };
  
  










