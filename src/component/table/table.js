import React from "react"

const Table = props => {
    const {columns, colWidth, data} = props;
    return (
        <table className="table">
            <colgroup>
                {colWidth.map((width, index)=>(
                    <col key={index} width={width} />
                ))}
            </colgroup>
            <thead className="thead-dark">
            <tr>
                {columns.map((column) => (
                    <th className="text-center" scope="col" key={column}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map(({name, email, phone},index) => (
                <tr key={name + email + phone}>
                    {columns.includes("Number") && <td className="text-center">{index+1}</td> }
                    <td className="text-center">{name}</td>
                    <td className="text-center">{email}</td>
                    <td className="text-center">{phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;