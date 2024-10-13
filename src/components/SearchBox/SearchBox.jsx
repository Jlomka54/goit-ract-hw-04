import css from "./SearchBox.module.css";

const SearchBox = ({ findContact, handleChange }) => {
  return (
    <div className={css.container}>
      <p>Find contact by name</p>
      <input type="text" value={findContact} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
