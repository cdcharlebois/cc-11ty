import React, {useState} from "react";
import {createRoot} from "react-dom/client"

const App = () => {
    const [count, setCount] = useState(0);
    return <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)} title="Increment">Increment</button>
    </div>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
