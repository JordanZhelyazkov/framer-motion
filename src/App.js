import "./App.css";
import { motion } from "framer-motion";

function App() {


  return (
    <div className="App">
      <motion.form 
      initial={{ X: "0"}}
      animate={{rotate: '127'}}
      style={{display: 'block', transform: "translateX(50px) translateY(0px) translateZ(0px)"}}
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
