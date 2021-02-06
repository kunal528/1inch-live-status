import "./index.css";
import PropTypes from "prop-types";
import TableRow from "./TableRow";

const Table = ({ swaps,state }) => {
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table key = {swaps.lenth>0?  swaps[0].tx_id:'table'}>
          <colgroup>
            <col style={{ width: "11%" }}></col>
            <col style={{ width: "10%" }}></col>
            <col style={{ width: "7%" }}></col>
            <col style={{ width: "2%" }}></col>
            <col style={{ width: "7%" }}></col>
            <col style={{ width: "14%" }}></col>
            <col style={{ width: "14%" }}></col>
            <col style={{ width: "14%" }}></col>
            <col style={{ width: "14%" }}></col>
            <col style={{ width: "7%" }}></col>
          </colgroup>
          <tbody>
            {swaps.map((swap) => (
              <TableRow swap={swap} state={state} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.propsTypes = {
  swaps: PropTypes.array,
};
export default Table;
