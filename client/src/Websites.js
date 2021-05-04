import React, { useState, useEffect } from "react"
import axios from "axios"
import { Alert, Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

function Websites(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [websites, setWebsites] = useState([]);

  function fetchData() {
    axios.get("/api/websites")
      .then(
        result => {
          setIsLoaded(true);
          setErrorMessage(null);
          setWebsites(result.data._embedded.websites);
        },
        (error) => {
          setIsLoaded(true);
          setErrorMessage(`Failed loading Websites: ${error.message}`);
          setWebsites([]);
        }
      );
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {props.navbar}
      <div className="d-flex flex-row justify-content-between p-3">
        <h3 className="website-title">Websites</h3>
        <Button color="primary" tag={Link} to="/newwebsite">Add New</Button>
      </div>
      {(() => {
        if (!isLoaded) {
          return (
            <div class="p-3">Loading...</div>
          )
        } else
        if (errorMessage) {
          return (
            <div className="d-flex flex-row p-3">
              <Alert color="warning" className="w-100">
                {errorMessage}
              </Alert>
            </div> 
          )
        } else
        if (!websites || websites.length === 0) {
          return (
            <div className="d-flex flex-row p-3">
              <Alert color="info" className="w-100">
                No websites registered
              </Alert>
            </div> 
          )
        } else {
          return (
            <div className="d-flex flex-row flex-container flex-wrap justify-content-center">
              <Table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>URL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
              {websites.map( website =>
                <tr key={website.slug}>
                  <td>{website.description}</td>
                  <td>{website.url}</td>
                  <td>{website.slug ? <Button color="secondary" tag={Link} to={'/websites/' + website.slug}>Details</Button> : null}</td>
                </tr>
              )}
                </tbody>
              </Table>
              
            </div>
          )
        }
      })()}
    </div>
  );
}

export default Websites;
