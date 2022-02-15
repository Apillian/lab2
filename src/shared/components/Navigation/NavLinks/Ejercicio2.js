import React from "react";
import { useState } from 'react';

import './Ejercicio2.css';

const Ejercicio2 = () => {

    const [count, setCount] = useState(0);

    return (
      <div className="butt">
        <p>Me han clickeado {count} Veces</p>
        <button className="butt2" onClick={() => setCount(count + 1)}>
         Click
        </button>
      </div>
    );
}

export default Ejercicio2;