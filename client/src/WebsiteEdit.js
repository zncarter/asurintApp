import React, { useState } from "react"
import axios from "axios";
import { Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navbar from "./NavBar";

function WebsiteEdit( props ) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [saveButtonDisplayed, setSaveButtonDisplayed] = useState(true);
  const [cancelButtonText, setCancelButtonText] = useState("Cancel");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  
  function createWebsite() {
    const website = {url: url, description: description, notes: notes};
    const json = JSON.stringify(website);
    axios.post("/api/websites", json, {headers: {'content-type': 'application/hal+json'}})
      .then(
        result => {
          setErrorMessage(null);
          setSuccessMessage(`Created Website with slug: ${result.data.slug}`)
          setSaveButtonDisplayed(false);
          setCancelButtonText("Return to list")
        },
        (error) => {
          var errorMsg = error.message;
          if (error.response.status === 409) {
            errorMsg = "A website already exists with this description";
          }
          setErrorMessage(`Failed creating Website: ${errorMsg}`);
        }
      );
  }

  function handleSubmit(event) {
    event.preventDefault();
    createWebsite();
  }

  return (
    <div>
      <Navbar/>
      <div className="d-flex flex-row justify-content-between p-3">
        <h3 className="website-title">Create Website</h3>
      </div>
      <div className="p-3">
      {errorMessage ? 
        <Alert color="error">
          {errorMessage}
        </Alert> : null
      }
      {successMessage ? 
        <Alert color="success">
          {successMessage}
        </Alert> : null
      }
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="url">URL</Label>
          <Input type="text" name="url" id="url" 
            value={url}
            onChange={e => setUrl(e.target.value)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description"
            value={description}
            onChange={e => setDescription(e.target.value)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes</Label>
          <Input type="text" name="notes" id="notes"
            value={notes}
            onChange={e => setNotes(e.target.value)} 
          />
        </FormGroup>
        <FormGroup className="d-flex flex-row">
          {saveButtonDisplayed ?
          <Button color="primary" type="submit" className="mr-3">Save</Button> : null
          }
          <Button color="secondary" tag={Link} to="/websites">{cancelButtonText}</Button>
        </FormGroup>
      </Form>
      </div>
    </div>
  );
}

export default WebsiteEdit;
