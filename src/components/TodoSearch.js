import React from "react";
import '../styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
function TodoSearch() {
        setSearchValue(event.target.value);
    }

    return (
        <input className="TodoSearch" placeholder="Onion" value={searchValue} onChange={onSearchValueChange} />
    );
}

export { TodoSearch };
