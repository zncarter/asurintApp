import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Alert, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Navbar from "./NavBar";

function Website( props ) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [website, setWebsite] = useState();
  
  // The <Route> that rendered this component has a
  // path of `/websites/:slug`. The `:slug` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { slug } = useParams();

  useEffect(() => {
    axios.get(`/api/websites/search/findBySlug?slug=${slug}`)
      .then(
        result => {
          setIsLoaded(true);
          setErrorMessage(null);
          setWebsite(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setErrorMessage(`Failed loading Website: ${error.message}`);
          setWebsite();
        }
      );
  }, [slug])

  return (
    <div>
      <Navbar/>
      <div className="d-flex flex-row justify-content-between p-3">
        <h3 className="website-title">Website details</h3>
      </div>
      {(() => {
        if (!isLoaded) {
          return (
            <div>Loading...</div>
          )
        } else
        if (errorMessage) {
          return (
            <div className="d-flex flex-row justify-content-center">
              <Alert color="warning" style={{flex:1, maxWidth:'80%'}}>
                {errorMessage}
              </Alert>
            </div> 
          )
        } else
        if (!website) {
          return (
            <div className="d-flex flex-row justify-content-center">
              <Alert color="warning" style={{flex:1, maxWidth:'80%'}}>
                Website ${slug} NOT FOUND!
              </Alert>
            </div>
          )
        } else {
          return (
            <div className="d-flex flex-row flex-container flex-wrap">
              <Card>
                <CardBody>
                  <CardTitle tag="h2">{website.description}</CardTitle>
                  <CardSubtitle tag="h3"><a target="_blank" rel="noreferrer" href={website.url}>{website.url}</a></CardSubtitle>
                  <CardText>{website.notes}</CardText>
                </CardBody>
              </Card>
            </div>
          )
        }
      })()}
    </div>
  );
}

export default Website;
