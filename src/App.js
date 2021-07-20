import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './Components/header/Header';
import Auth from './pages/sign-in-sign-up/Auth';


function App() {
  return (
    <div className="App">
      <Header/>      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
