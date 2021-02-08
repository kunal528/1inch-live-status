/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { supabaseClient } from "./supabase_client.js";
import { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import Body from "./components/body/Body";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let { error, data } = await supabaseClient
        .from("latest_swaps")
        .select()
        .order("block", { ascending: false })
        .limit(10);
      if (error) {
        alert(error.message);
        return;
      }
      setData(data);
    };
    fetchData();
    supabaseClient
      .from("latest_swaps")
      .on("INSERT", (v) => {
        console.log(data);
        console.log(v.new);
        setData((d) => [v.new, ...d]);
      })
      .subscribe();
    setLoading(false);
  }, []);
  return (
    <div className="App">
      <NavBar />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Body swaps={data} />
      )}
    </div>
  );
}

export default App;
