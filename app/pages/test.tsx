"use client"
import { useState, useEffect } from "react";

const fetchData = () => new Promise((r) => setTimeout(r(Date.now()), 100));

const MyComponent = () => {
  const [result, setResult] = useState();
  const data = fetchData().then((value) => {
    setResult(value)
  }); // Issue is here
  
  return (
    <div>
      {result === data.toString() ? ( // 'data' is a Promise object here, not the resolved value
        <div>hello</div>
      ) : (
        <div>good bye</div>
      )}
      mount
    </div>
  );
};

export default MyComponent;