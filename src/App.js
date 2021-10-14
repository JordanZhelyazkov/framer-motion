import "./App.css";
import { motion } from "framer-motion";

function App() {


  return (
    <div className="App">
      <motion.form 
      initial={{ x: "0", y: "0"}}
      animate={{rotate: '127'}}
      style={{transform: "translateX(0px) translateY(0px) rotate(0deg) translateZ(0px)"}}
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
