import react from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import { auth } from './firebase/firebase.utils';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

import Header from './components/header/header.component'

class App extends react.Component{
  constructor() {
    super()
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
        this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
    )
  }
}

export default App;
