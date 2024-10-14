import css from "./LoadMoreBT.module.css";
const LoadMoreBT = ({ loadMorePhoto }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={loadMorePhoto} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBT;
