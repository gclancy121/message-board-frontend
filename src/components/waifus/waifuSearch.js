import React, {useState, useEffect} from "react";
import axios from "axios";
import URL from "../../utils/url";
import Waifu from "./waifu";

import '../../css/waifus/waifuSearch.css';
function WaifuSearch() {
    const initialSearchState = {
        waifu_search: ''
    };

    const [search, setSearch] = useState(initialSearchState);
    const [waifus, setWaifus] = useState([]);
    
    const handleChange = evt => {
        setSearch({
            ...search,
            [evt.target.name]: evt.target.value
        })
    };
   //functions related to searching
    function searchWaifu(evt) {
        evt.preventDefault();
        const searchable = search.waifu_search;
        axios.get(`${URL}/waifus/${searchable}`).then(res => {
            setSearch(initialSearchState);
            setWaifus(res.data);
        })
        
    }
    function Conditional() {
        if (waifus.length === 0) {
            return (
                <></>
            )
        } else {
            return (
                <div className='waifus'>
                    {waifus.map(waifu => <Waifu waifu={waifu} key={waifu.waifu_id} />)}
                </div>
                
            )
        }
    }
   
    return (
        <>
         <div className='search-container'>
            <form className='search-box'>
                <input type='text' placeholder='Search for a waifu' name='waifu_search' id='search' value={search.waifu_search} onChange={handleChange} />
                <button id='submit' onClick={searchWaifu}>Submit</button>
            </form>   
        </div>
        <Conditional />
        </>
    )
}

export default WaifuSearch;