import { useState, useEffect } from "react"
import {db} from "../firebase";

export default function useFirebaseRTDB(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = db.get(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        db.ref.set(key, (value))
    }, [key, value])

    return [value, setValue]
}
