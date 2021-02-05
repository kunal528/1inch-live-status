import Table from "./Table";
import "./index.css";
import LiveStatus from "./LiveStatus";
import TableHeader from "./TableHeader";
const Body = ({ swaps }) => {
  return (
    <div className="body">
      <LiveStatus />
      <TableHeader />
      <Table swaps={swaps} />
    </div>
  );
};

export default Body;
