import {React,Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import api from '../../api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login: {
            username: '',
            password: '',
        }
    }
}

login = (e) => {
    e.preventDefault();
    let self = this;
    api.post('/users/login', self.state.login)
        .then(function (response) {
            console.log('user login success response :: ', response.data);
            //---set Authorization header ---
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
            //token store in session storage
            sessionStorage.setItem('token', response.data.token);
            self.props.history.push('/');
        })
        .catch(function (error) {
            alert('Invalid Credentials! Please Enter Valid Credentials.');
            console.log("login error response :: ", error);
        });
};


render() {
  const {login} = this.state;
  return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 mt-3 font-bold">
                  <small>Sign in with credentials</small>
                </div>
                <form onSubmit={this.login}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={login.username}
                                       onChange={(e) => this.setState({
                                           login: {
                                               ...login,
                                               username: e.target.value
                                           }
                                       })}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="password"
                      placeholder="Password"
                      value={login.password}
                                       onChange={(e) => this.setState({
                                           login: {
                                               ...login,
                                               password: e.target.value
                                           }
                                       })}
                      required
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      name="login"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="text-center w-full">
                  <div className="p-3">or</div>
                  <Link to="/auth/register">
                    <small>Create a new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default Login;
