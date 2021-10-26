import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import Notfound from './Components/Notfound/Notfound';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <ManageInventory></ManageInventory>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
