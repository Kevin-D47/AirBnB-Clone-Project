// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GetAllSpots from "./components/AllSpots";
import GetSpotDetails from "./components/SpotDetails";
import NewSpotFormPage from "./components/NewSpotFormPage";
import CreateReviewForm from "./components/CreateReview";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/spots/:spotId/create'>
            <CreateReviewForm />
          </Route>
          <Route path='/spots/create'>
            <NewSpotFormPage />
          </Route>
          <Route path='/spots/:spotId'>
            <GetSpotDetails />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <GetAllSpots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
