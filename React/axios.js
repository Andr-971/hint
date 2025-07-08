
// Установка npm i axios
import axios from "axios";
import { useEffect, useState } from "react";

export default Component = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/stocks")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(data);

    return (
        <>
        
        </>
    )
}