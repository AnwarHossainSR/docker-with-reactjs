import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  const fetchData = async () => {
    console.log("calling");
    const res = await axios.get("http://localhost:5000/");
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>This is test</div>;
};

export default App;
