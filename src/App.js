import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import Photo from './component/Photo';
import Photos from './component/Photos';
import About from './component/About'
import Contact from './component/Contact'
function App() {
  
  return (
    <BrowserRouter>
      < NavbarComponent />
        <Switch>
            <Route exact path="/">
              <Photo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/photo/:id">
              <Photos />
            </Route>
        </Switch> 
    </BrowserRouter>
  );
}

export default App;
