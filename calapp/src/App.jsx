import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"
import Display from "./components/display";
import Button from "./components/buttons";
function App() {
     return <div className={styles.calculator}>
        <Display></Display>
        <Button></Button>
     </div>
}

export default App;
