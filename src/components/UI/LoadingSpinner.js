import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <section>
      <div className={classes.spinner}></div>
      <div className={classes.text}>Loading...</div>
    </section>
  );
};

export default LoadingSpinner;
