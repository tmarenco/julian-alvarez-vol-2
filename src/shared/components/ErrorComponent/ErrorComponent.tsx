import styles from "./error.module.css";

export const ErrorComponent = () => {
  return (
    <>
      <div className={styles["error-container"]}>
        <h1>Error</h1>
      </div>
    </>
  );
};
