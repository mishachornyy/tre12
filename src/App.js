import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import TableContainer from './TableContainer';
import "./index.css"
import { SelectColumnFilter } from './filters';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const body = await response.json();
      const contacts = body.results;
      console.log(contacts);
      setData(contacts);
    };
    doFetch();
  }, []);

  const renderRowSubComponent = (row) => {
    const {
      name: { first, last },
      location: { city, street, postcode },
      picture,
      cell,
    } = row.original;
    return (
      <Card style={{ width: '1rem', margin: '0 auto' }}>
        <CardImg top src={picture.large} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            <strong>{`${first} ${last}`} </strong>
          </CardTitle>
          <CardText>
            <strong>Phone</strong>: {cell} <br />
            <strong>Address:</strong>{' '}
            {`${street.name} ${street.number} - ${postcode} - ${city}`}
          </CardText>
        </CardBody>
      </Card>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: 'fgd',
        id: 'expander', // 'id' is required
        Cell: ({ row }) => (
            <div>
                <input type="checkbox" />
            </div>
        ),
      },
        {
            Header: 'First Name',
            accessor: 'first name',
            maxWidth: "100px",

        },

        {
            Header: 'Last Name',
            accessor: 'name.last',
        },
        {
            Header: 'Address',
            accessor: 'address',
            width:'50',
        },
        {
            Header: 'Adertgtertdress',
            accessor: 'adretdress',
        },
        {
            Header: 'Adreterdress',
            accessor: 'add3ress',
        },
        {
            Header: 'Adderterress',
            accessor: 'a3ddress',
        },
        {
            Header: 'Addreertetss',
            accessor: 'addres3s',
        },









    ],
    []
  );

  return (

      <TableContainer
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
      />




  );
};

export default App;
