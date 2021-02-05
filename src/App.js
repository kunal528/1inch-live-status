/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { supabaseClient } from "./supabase_client.js";
import { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import Body from "./components/body/Body";
function App() {
  let subscription = null;
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let { error, data } = await supabaseClient
        .from("latest_swaps")
        .select();
      if (error) {
        console.log(error.message);
        return;
      }
      setData(data.sort((a, b) => b.block - a.block));
      console.log(state);
    };
    fetchData();
    subscription = supabaseClient
      .from("latest_swaps")
      .on("INSERT", (v) => {
        setState(v.new.tx_id);
        console.log(v);
      })
      .subscribe();
    setLoading(false);
  }, [state]);
  return (
    <div className="App">
      <NavBar />

      {loading ? "loading" : <Body swaps={data} />}
    </div>
  );
}

export default App;
