import { Route,Switch } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layouts/Layout';



function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/newmeetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
