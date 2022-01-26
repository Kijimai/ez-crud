import React, { useState } from "react"
import axios from "axios"
import { Button, Checkbox, Form } from "semantic-ui-react"
import { useHistory } from "react-router-dom"

const Create = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  let history = useHistory()

  const postData = () => {
    axios
      .post(`https://61efcb91732d93001778e5df.mockapi.io/someData`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        history.push("/read")
      })
  }

  return (
    <Form className="create-form" onSubmit={postData}>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default Create
