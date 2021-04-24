import React from "react"

const TableHead = props => {
    const {columns} = props;
    return (
        <thead className="thead-dark">
            <tr>
                {columns.map((column) => (
                    <th className="text-center" scope="col" key={column}>{column}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead;