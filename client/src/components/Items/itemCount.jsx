import React from "react";
import { useState, useEffect } from "react";

const ItemCount = ({ item }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(item.count);
    }, [item.count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default ItemCount;