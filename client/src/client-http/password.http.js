import axios from "axios";
import { apiURL } from "../../config";

// eslint-disable-next-line
export default {
    addNewPassword: async (payload) => {
        try {
            const res = await axios.post(`${apiURL}/passwords/addNewPassword`, {
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
            const res = await axios.get(`${apiURL}/passwords/getAllPasswords`);
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    decryptPassword: async (encryption) => {
        try {
            const res = await axios.post(`${apiURL}/passwords/decryptPassword`, { encryption });
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    deleteRecord: async (id) => {
        try {
            const res = await axios.delete(`${apiURL}/passwords/deleteRecord`, {
                data: {
                    id: id
                }
            })
            if (res.status === 500) {
                throw new Error(res.data);
            }
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    editRecord: async (edit, id) => {
        try {
            const res = await axios.put(`${apiURL}/passwords/updateRecord`, { ...edit, id });
            if (res.status === 500) {
                throw new Error(res.data);
            }
            return res.data;

        } catch (e) {
            console.log(e);
        }
    }
}
