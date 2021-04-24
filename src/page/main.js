import React from 'react';
import faker from "faker/locale/ko";
import Table from '../component/table/table';

faker.seed(100)

const Main = props => {
    const columns = ["Number","Name", "Email", "Phone"];
    const colWidth = ["10%", "30%", "30%", "*"];
    const data = Array(50).fill().map(()=>({
        name : faker.name.lastName() + faker.name.firstName(),
        email : faker.internet.email(),
        phone : faker.phone.phoneNumber(),
    }));

    return (
        <Table columns={columns} colWidth={colWidth} data={data}></Table>
    )
}

export default Main;
