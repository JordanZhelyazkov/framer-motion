import "./App.css";
import { motion, transform } from "framer-motion";

function App() {

const value = 48;
  return (
    <div className="App">
      <motion.form 
      
      initial={{x: 0}}
      animate={{translateX: value + 'px'}}
      
      transition={{type: 'spring', delay: 0.5}}
      
      // x: 48, 
      
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
