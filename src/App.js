import "./App.css";
import { motion } from "framer-motion";

function App() {

const value = 48 + 'px';
const initValue = 0 + 'px';
  return (
    <div className="App">
      <motion.form 
      animate={{translateX: initValue }}
      initial={{translateX: value }}
      
      transition={{type: 'spring', delay: 0.5}}

      
      >
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </motion.form>
    </div>
  );
}

export default App;
