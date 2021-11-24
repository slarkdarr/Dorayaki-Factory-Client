import {React, Component} from "react";
import { Link } from "react-router-dom";
import api from '../../api';

class Register extends Component {
  constructor(props) {
      super(props);
      this.state = {
          registration: {
              username: '',
              name: '',
              email: '',
              password: '',
          }
      }
  }

  userRegistration = (e) => {
      e.preventDefault();
      let self = this;
      api.post('/api/users', self.state.registration)
          .then(function (response) {
              console.log('user registration success response :: ', response.data);
              alert('User Registration Successful.');
              self.setEmptyRegistrationState();
              self.props.history.push('/auth/login');
          })
          .catch(function (error) {
              console.log("user registration error response  :: ", error.response);
              if (error.response.status === 302)
                  alert('Username Already exists. Please try again.');
              else
                  alert('User Registration Failed!')
          });
  };

  setEmptyRegistrationState() {
      const {registration} = this.state;
      registration.username = '';
      registration.password = '';
      registration.email = '';
      registration.name = '';
      this.setState({registration});
  }
  render() {
      const {registration} = this.state;
  return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 mt-3 font-bold">
                  <small>Sign up with credentials</small>
                </div>
                <form onSubmit={this.userRegistration}>
                <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      // onkeyup = {checkUsername()}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      pattern="^[a-zA-Z0-9_]*$"
                      minLength="5"
                      name="username"
                      placeholder="Username"
                      value={registration.username}
                      onChange={(e) => this.setState({
                          registration: {
                              ...registration,
                              username: e.target.value
                          }
                      })}
                      required
                    />
                    {/* <div id="username-not-available" class="username-not-available"></div> */}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="name"
                      placeholder="Nama Lengkap"
                      value={registration.name}
                      onChange={(e) => this.setState({
                          registration: {
                              ...registration,
                              name: e.target.value
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
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="email"
                      placeholder="example@global.com"
                      value={registration.email}
                      onChange={(e) => this.setState({
                          registration: {
                              ...registration,
                              email: e.target.value
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
                      minLength="5"
                      name="password"
                      placeholder="Password"
                      value={registration.password}
                      onChange={(e) => this.setState({
                          registration: {
                              ...registration,
                              password: e.target.value
                          }
                      })}
                      required
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Saya setuju dengan Syarat dan Ketentuan
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
                <div className="text-center w-full">
                  <div className="p-3">or</div>
                  <Link to="/auth/login">
                    <small>Login to an existing account</small>
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

export default Register;
