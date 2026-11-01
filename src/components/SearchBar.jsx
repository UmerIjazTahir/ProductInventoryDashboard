function SearchBar({ searchTerm, onSearch }) {
    return (
        <input
            className="search"
            type="text"
            placeholder="Search by name or category"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}

export default SearchBar;