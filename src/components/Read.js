import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Table, Button } from "semantic-ui-react"

const Read = () => {
  const [APIData, setAPIData] = useState([])
  let history = useHistory()
  
  const setData = (data) => {
    console.log(data)

    let { id, firstName, lastName, checkbox } = data
    localStorage.setItem("ID", id)
    localStorage.setItem("First Name", firstName)
    localStorage.setItem("Last Name", lastName)
    localStorage.setItem("Checkbox Value", checkbox)
  }

  const getData = () => {
    axios
      .get(`https://61efcb91732d93001778e5df.mockapi.io/someData`)
      .then(({ data }) => {
        setAPIData(data)
      })
  }

  const deleteData = (id) => {
    axios
      .delete(`https://61efcb91732d93001778e5df.mockapi.io/someData/${id}`)
      .then(() => getData())
  }

  useEffect(() => {
    axios
      .get(`https://61efcb91732d93001778e5df.mockapi.io/someData`)
      .then((res) => {
        console.log(res.data)
        setAPIData(res.data)
      })
  }, [])

  return (
    <div>
      <Button onClick={() => history.push("/create")}>Add Data</Button>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "UnChecked"}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => deleteData(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Read
