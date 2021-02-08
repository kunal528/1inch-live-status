import Table from "./Table";
import "./index.css";
import LiveStatus from "./LiveStatus";
import TableHeader from "./TableHeader";
const Body = ({ swaps,isDarkMode }) => {
  return (
    <div className={`body ${isDarkMode && 'darkMode'}`} >
      <LiveStatus isDarkMode={ isDarkMode}/>
      <TableHeader isDarkMode={ isDarkMode}/>
      <Table swaps={swaps} isDarkMode={ isDarkMode}/>
    </div>
  );
};

export default Body;
