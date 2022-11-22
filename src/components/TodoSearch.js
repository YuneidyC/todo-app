import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="TodoSearch" disabled={loading}>
            <input
                className="TodoSearch__input"
                placeholder="Search..."
                value={searchValue}
                onChange={onSearchValueChange}
                disabled={loading}
            />
        </div>
    );
}

export { TodoSearch };
