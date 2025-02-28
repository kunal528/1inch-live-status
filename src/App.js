/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { supabaseClient } from "./supabase_client.js";
import { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import Body from "./components/body/Body";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  useEffect(() => {
    const fetchData = async () => {
      let { error, data } = await supabaseClient
        .from("latest_swaps")
        .select()
        .not("tweetUrl", "eq", "https://twitter.com/1inchSwapBot")
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
    <div className={`App ${isDarkMode && "darkMode"}`}>
      <NavBar
        isDarkMode={isDarkMode}
        onChange={setIsDarkMode}
      />
      {loading ? (
        <div className={`loader ${isDarkMode && "darkMode"}`}>Loading...</div>
      ) : (
        <Body swaps={data} isDarkMode={isDarkMode} />
      )}
    </div>
  );
}

export default App;
