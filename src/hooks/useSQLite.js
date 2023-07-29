import { useState, useEffect } from "react"

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/chinook.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});



export default function useSQLite(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}