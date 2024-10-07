import React from "react";
import Input from "../atoms/interactions/Input";
import Button from "../atoms/interactions/Button";

const SearchBar = ({ placeholder, onSearch }) => {
    return (
        <div className="search-bar">
            <Input placeholder={placeholder} />
            <Button text="Buscar" onClick={onSearch} />
        </div>
    );
};

export default SearchBar;