import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigationbar } from './components/navigation';
import {Homepage} from '../src/pages/homepage';
import {Exercisespage} from '../src/pages/exercisespage';
import {Contactspage} from '../src/pages/contactspage';
import {Nutritionpage} from '../src/pages/nutritionpage';
import {Personaltrainerpage} from '../src/pages/personaltrainerpage';
import {Route, Routes, Link, Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Navigationbar></Navigationbar>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/exercises' element={<Exercisespage></Exercisespage>}></Route>
          <Route path='/nutrition' element={<Nutritionpage></Nutritionpage>}></Route>
          <Route path='/personaltrainers' element={<Personaltrainerpage></Personaltrainerpage>}></Route>
          <Route path='/contacts' element={<Contactspage></Contactspage>}></Route>
        </Routes>
    </div>
  );
}

export default App;
