import React from "react";
import TableHead from "./tableHead";

const TableContent = props => {
    const {columns, data} = props;
    const includesNumber = columns.includes("Number");
    return (
        <>
            <TableHead columns={columns}/>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {
                        includesNumber && <td className="text-center">{index + 1}</td>
                    }
                    {
                        Object.keys(row).map(key => <td className="text-center" key={key + row}>{row[key]}</td>)
                    }
                </tr>
            ))}
            </tbody>
        </>
    )
}

export default TableContent;