import "./App.css";
import { motion, transform } from "framer-motion";

function App() {


  return (
    <div className="App">
      <motion.form 
      initial={{ x: 0}}
      animate={{translateX: '50px',translateX: '50%'}}
      
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
