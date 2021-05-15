import axios from "axios";

// endpoints
/**
 * http://localhost:5000/api/users/addNewUser
 * http://localhost:5000/api/users/loginUser
 * http://localhost:5000/api/users/getMe
 * http://localhost:5000/api/users/deleteUser
 * http://localhost:5000/api/users/updateUser
 * http://localhost:5000/api/users/logOut
 */

export default {
   registerUser: async (payload) => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/addNewUser",{payload});
            console.log(res);
        }
        catch(e) {
            console.error(e)
        }
   },
   loginUser: async (payload) => {
        try {
          const res = await axios.post("http://localhost:5000/api/users/loginUser",{payload});
          console.log(res);
        }
        catch(e) {
            console.error(e)
        }
   },
   logOut: async () => {
        try {
        
        }
        catch(e) {
        
        }
   },
   removeUser: async () => {
        try {

        }
        catch(e) {

        }
   },
   getMe: async () => {
        try {

        }
        catch(e) {

        }
   },
   updateUser: async () => {
        try {

        }
        catch(e) {

        }
   }
}
