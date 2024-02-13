import Button from "../common/Button/Button";
import React, {ChangeEvent, MouseEvent, useState} from "react";
import styles from '../Search/SearchBar.module.css'

//might need to submit instead of click

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
        <form onSubmit={handleSubmit} className={styles.search}>
            <input
                type="text" 
                placeholder="Search"
                onChange={handleSearch}
                value={search}
                className={styles.input}
            />
            <Button buttonTitle="Search" onClick={handleClick}/>
        </form>
    )
}
