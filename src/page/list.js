import React from 'react';
import Table from '../component/table';
import TableColumn from '../component/tableColumn';
import TableRow from '../component/tableRow';
import { Link } from 'react-router-dom';

const List = props => {

  return (
    <>
      <Table headersName={props.row}>
       { 
            props.children.map((item, index) => {
                return (
                <TableRow>
                    <TableColumn>{item.id}</TableColumn>
                    <TableColumn>
                        <Link to={`/listView/${item.id}`}>{ item.title }</Link>
                    </TableColumn>
                    <TableColumn>{item.date}</TableColumn>
                    <TableColumn>{item.cnt}</TableColumn>
                </TableRow>
                )
            })
        }
      </Table>
    </>
  )
}
 
export default List;