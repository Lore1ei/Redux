import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../store/auth";

const Header = () => {
    const dispatch = useDispatch();
  const authLogin = useSelector(state => state.auth.isAuth)

    const logOut = event => {
      event.preventDefault();
      dispatch(authAction.logout())
    }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
        {authLogin &&
            <nav>
                <ul>

                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>

                    <li>
                        <button onClick={logOut}>Logout</button>
                    </li>
                </ul>
            </nav>
        }
    </header>
  );
};

export default Header;
