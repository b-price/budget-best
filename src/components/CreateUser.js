import {db} from "../firebase";
import {getDatabase, ref, set} from "firebase/database"

export default function CreateUser(name, email) {
    const database = getDatabase()
    set(ref(database, 'userID/' + email), {

        name: name,
        email: email,
        budgets: "",
        expenses: "",
        income: ""

    });
}