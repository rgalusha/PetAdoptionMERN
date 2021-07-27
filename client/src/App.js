import './App.css';
import {Router} from '@reach/router';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App container">
      <Router>
        <AllPets path="/"></AllPets>
        <PetDetails path="/pets/:petid"></PetDetails>
        <CreatePet path="/pets/new"></CreatePet>
        <EditPet path="pets/:petid/edit"></EditPet>
      </Router>
    </div>
  );
}

export default App;
