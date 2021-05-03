import axios from "axios";

export default {
    addNewPassword: async (payload) => {
        try {
            const res = await axios.post("http://localhost:5000/api/passwords/addNewPassword", {
                payload
            });
            console.log("res: ", res);
        }
        catch (e) {
            console.error(e);
        }
    },
    getAllPasswords: async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/passwords/getAllPasswords");
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    }
}