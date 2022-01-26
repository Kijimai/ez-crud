import axios from "axios"
import React, { useEffect, useState } from "react"
import { Form, Checkbox, Button } from "semantic-ui-react"
import { useHistory } from "react-router-dom"

const Update = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [checkbox, setCheckbox] = useState(false)
  const [id, setID] = useState(null)

  let history = useHistory()

  useEffect(() => {
    setID(localStorage.getItem("ID"))
    setFirstName(localStorage.getItem("First Name"))
    setLastName(localStorage.getItem("Last Name"))
    setCheckbox(localStorage.getItem("Checkbox Value"))
  }, [])

  const updateData = () => {
    axios.put(`https://61efcb91732d93001778e5df.mockapi.io/someData/${id}`, {
      firstName,
      lastName,
      checkbox,
    })
  }

  const deleteData = (id) => {
    axios
      .delete(`https://61efcb91732d93001778e5df.mockapi.io/someData/${id}`)
      .then(() => {
        history.push("/read")
      })
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
            checked={checkbox}
          />
        </Form.Field>
        <Button type="submit" onClick={updateData}>
          Update
        </Button>
        <Button type="submit" onClick={() => deleteData(id)}>
          Delete
        </Button>
      </Form>
      <a href="/read">Go back</a>
    </div>
  )
}

export default Update
