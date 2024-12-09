import styles from "./buttons.module.css";
const Button=()=>{
    return  <div className={styles.buttoncontainer}>
    <button className={styles.button}>c</button>
    <button className={styles.button}>1</button>
    <button className={styles.button}>2</button>
    <button className={styles.button}>3</button>
    <button className={styles.button}>+</button>
  </div>
}
export default Button;