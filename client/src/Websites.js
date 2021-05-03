import React, { useState, useEffect } from "react"
import axios from "axios"
import { Alert, Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

function Websites(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [websites, setWebsites] = useState([]);

  function fetchWebsites() {
    axios.get("/api/websites")
      .then(
        result => {
          setIsLoaded(true);
          setErrorMessage(null);
          setWebsites(result.data._embedded.websites);
        },
        (error) => {
          setIsLoaded(true);
          setErrorMessage(`Failed loading Websites: {error.message}`);
          setWebsites([]);
        }
      );
  }

  useEffect(() => {
    fetchWebsites();
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        {props.navbar}
        <div className="d-flex flex-row justify-content-between p-3">
          <h3 className="website-title">Websites</h3>
          <Button color="success" tag={Link} to="/new-website">Add New</Button>
        </div>
      {errorMessage ?
        <div className="d-flex flex-row justify-content-center">
          <Alert color="warning" style={{flex:1, maxWidth:'80%'}}>
            {errorMessage}
          </Alert>
        </div> 
        : 
        <div className="d-flex flex-row flex-container flex-wrap justify-content-center">
          <Table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
          {websites.map( website =>
            <tr>
              <td>{website.url}</td>
              <td>{website.description}</td>
              <td>detailURL</td>
            </tr>
          )}
            </tbody>
          </Table>
          {!websites || websites.length === 0 ? <p>No Websites registered!</p> : null}
        </div>
      }
      </div>
    );
  }
}

export default Websites;
