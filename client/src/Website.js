import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";

function Website( props ) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [website, setWebsite] = useState();
  
  // The <Route> that rendered this component has a
  // path of `/websites/:slug`. The `:slug` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.

  let { slug } = useParams();

  function fetchWebsite() {
    axios.get(`/api/websites/search/findBySlug?{slug}`)
      .then(
        result => {
          setIsLoaded(true);
          setErrorMessage(null);
          setWebsite(result);
        },
        (error) => {
          setIsLoaded(true);
          setErrorMessage(`Failed loading Website: {error.message}`);
          setWebsite();
        }
      );
  }

  useEffect(() => {
    fetchWebsite();
  }, [])

  return (
    <div>
      <h3>{website.url}</h3>
    </div>
  );
}

export default Website;
