import { ChangeEvent, useState } from "react";


export default function SearchBar(){
    const [search, setSearch] = useState('');

    function handleSearch(e: ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setSearch(e.target.value);
    }

    return(
        <input
            type="text" 
            placeholder="Search"
            onChange={handleSearch}
            value={search}
        />
    )
}
