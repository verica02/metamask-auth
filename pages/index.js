import Login from "../components/Login";
import {useMoralis} from "react-moralis";
import styles from "../styles/Login.module.css";

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  return( <div>{isAuthenticated ? (
  <div className = {styles.wrapper}>
  <p className = {styles.paragraph}>
    You are logged in
    <button onClick= {logout} className = {styles.logout}>Sign Out</button>
  </p>
</div>
    ):(
    <Login/>
  )}
  
  </div>);
  
}