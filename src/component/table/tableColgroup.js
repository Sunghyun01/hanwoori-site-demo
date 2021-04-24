import React from "react"

const TableColgroup = props => {
    const {colWidth} = props;
    return (
        <colgroup>
            {colWidth.map((width, index)=>(
                <col key={index} width={width} />
            ))}
        </colgroup>
    )
}

export default TableColgroup;