import Counter from './components/Counter';
import {Fragment} from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import {useSelector} from "react-redux";


function App() {
    const authLogin = useSelector(state => state.auth.isAuth)
  return (
      <Fragment>
        <Header />
        <Auth />
          {
              authLogin && <UserProfile />
          }
    <Counter />
      </Fragment>
  );
}

export default App;
