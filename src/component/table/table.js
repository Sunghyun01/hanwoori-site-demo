import React,{useState} from "react"
import TableColgroup from "./tableColgroup";
import TableContent from "./tableContent";

const Table = props => {
    const [columns] = useState(props['columns']);
    const [colWidth] = useState(props['colWidth']);
    const [data] = useState(props['data']);

    return (
        <table className="table">
            <TableColgroup colWidth={colWidth}/>
            <TableContent columns={columns} data={data}/>
        </table>
    )
}

export default Table;