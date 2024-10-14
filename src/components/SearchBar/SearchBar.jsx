import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.input}
          name="searchValue"
          type="text"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
