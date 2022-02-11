import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css"

const Login = () => {
  const [username,SetUsername]= useState(null);
  const [password,SetPassword]=useState(null);
  const [error,SetError] = useState(false);
  const router = useRouter();

  const handleClick = async()=>{
    try{
      await axios.post("http://localhost:3000/api/login",
      {
        username,
        password,
      });
      router.push("/admin");
    }catch(err){
      SetError(true);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input 
          type="text" 
          placeholder="Username" 
          className={styles.input} 
          onChange={(e)=>SetUsername(e.target.value)}
           />
        <input 
          placeholder="Password"
          type="password"
          className={styles.input} 
          onChange={(e)=>SetPassword(e.target.value)}
          />
        <button onClick={handleClick} className={styles.button}>Sign In</button>
        {error && <span className={styles.error}>Wrong Credentials</span>}
      </div>
   </div>
  );
};

export default Login;
