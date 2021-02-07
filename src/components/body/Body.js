import Table from "./Table";
import "./index.css";
import LiveStatus from "./LiveStatus";
import TableHeader from "./TableHeader";
const Body = ({ swaps,state }) => {
  return (
    <div className="body" style={{backgroundColor: '#F9FAFD'}}>
      <LiveStatus />
      <TableHeader />
      <Table swaps={swaps} state={state} />
    </div>
  );
};

export default Body;
