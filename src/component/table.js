import React from 'react';
 
const Table = props => {
    const { headersName, children } = props;
 
    return (
        <table className="table">
        <thead>
          <tr>
            {
              headersName.map((item, index) => {
                return (
                  <td className="common-table-header-column" key={index}>{ item }</td>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            children
          }
        </tbody>
      </table>
    )
}

export default Table;