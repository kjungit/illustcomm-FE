import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GlobalStyles />
    </div>
  );
}

export default App;
