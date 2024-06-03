import styles from "./spinner.module.css";

export const Spinner = () => {
  return (
    <>
      <div className={styles["spinner-container"]}>
        <img
          src="/src/assets/spinner/loading-spinner.svg"
          alt="Loading Spinner"
        />
      </div>
    </>
  );
};
