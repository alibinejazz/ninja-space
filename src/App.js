import Clients from "./Components/Clients";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Meet from './Components/Meet'
import Footer from "./Components/Footer";
import Connect from "./Components/Connect";
import Connnect from "./Components/Connnect";
import styles from "./Components/Main.module.css"
// import styles from ''

function App() {
  return (
    <div className={styles.app}>
    <Navbar/>
    <Home/>
    <Work/>
    <Services/>
    <Clients/>
    <Meet/>
    <Connnect/>
    {/* <Connect/> */}
    <Footer/>
    </div>
  );
}

export default App;
