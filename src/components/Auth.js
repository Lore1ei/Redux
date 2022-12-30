import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../store/auth";
import {Fragment} from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const authLogin = useSelector(state => state.auth.isAuth)

  const btnLogin = (event) => {
    event.preventDefault();
    dispatch(authAction.login())
  }

  return (
      <Fragment>
        {!authLogin &&
            <main className={classes.auth}>

              <section>
                <form>
                  <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'/>
                  </div>
                  <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'/>
                  </div>
                  <button onClick={btnLogin}>Login</button>

                </form>
              </section>
            </main>
        }
      </Fragment>
  );
};

export default Auth;
