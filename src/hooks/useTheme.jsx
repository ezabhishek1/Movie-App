import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState();

    // true -> dark 

    useEffect(() => {
        let localTheme = window.localStorage.getItem("theme");

        if (localTheme === "true") {
            document.body.classList.add("dark")
            setTheme(true)
        } else {
            document.body.classList.remove("dark")
            setTheme(false)
        }
    }, [theme]);


    const toggleTheme = () => {
        if (theme) {
            window.localStorage.setItem("theme", "false");
            setTheme(false);
            document.body.classList.toggle("dark")
        } else {
            window.localStorage.setItem("theme", "true");
            setTheme(true);
            document.body.classList.toggle("dark")
        }
    };
    return [theme, toggleTheme];
}

