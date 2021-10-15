import "./App.css";
import { motion, transform } from "framer-motion";

function App() {


  return (
    <div className="App">
      <motion.form 
      animate={{x: 50, rotate: 120, translateX: '30px'}}
      initial={{translateX: '0px', translateY: '0px', translateZ: '0px'}}
      
      
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
