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
    },
    decryptPassword: async (encryption) => {
        try {
            const res = await axios.post("http://localhost:5000/api/passwords/decryptPassword", { encryption });
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    deleteRecord: async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/passwords/deleteRecord`, {
                data: {
                    id: id
                }
            })
            if (res.status === 500) {
                throw new Error("Database error!");
            }
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    editRecord: async (edit, id) => {
        try {
            const res = await axios.put("http://localhost:5000/api/passwords/updateRecord", { ...edit, id });
            if (res.status === 500) {
                throw new Error("Database error!");
            }
            return res.data;

        } catch (e) {
            console.log(e);
        }
    }
}
