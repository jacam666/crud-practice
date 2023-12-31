import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://64bad0c25e0670a501d6ad84.mockapi.io/fakeData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox', checkbox);
    };

    const onDelete = (id) => {
        axios.delete(`https://64bad0c25e0670a501d6ad84.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    const getData = () => {
        axios.get('https://64bad0c25e0670a501d6ad84.mockapi.io/fakeData')
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>
                                </Link>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Link to='/create'>
                <Button className='button'>head to create page</Button>
            </Link>
        </div>
    )
}