const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          name="searchValue"
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
