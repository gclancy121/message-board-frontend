import axios from "axios";
import React, {useState, useEffect} from "react";
import URL from "../../url";


function AllWaifus() {
    const [length, setLength] = useState(0);;
    
    useEffect(() => {
        axios.get(`${URL}/waifus`).then(response => {
            setLength(response.data.length);
        })
    })

    console.log(length);
    return (
        <div>
            Nothing here yet.
        </div>
    )
}

export default AllWaifus