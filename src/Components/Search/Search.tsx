import Button from "../common/Button/Button";
import React, {ChangeEvent, MouseEvent, useState} from "react";

export default function Search(){
    const [search, setSearch] = useState('');

    function handleSearch(e: ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleClick(e: MouseEvent<HTMLButtonElement>){
        alert(`${e} I was clicked`)
    }

    function handleSubmit(){}

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                placeholder="Search"
                onChange={handleSearch}
                value={search}
            />
            <Button buttonTitle="Search" onClick={handleClick}/>
        </form>
    )
}
