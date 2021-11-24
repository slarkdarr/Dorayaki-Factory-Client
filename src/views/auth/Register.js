import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const base_url = window.location.origin;
  const url = base_url + "/api/users/login";

  // function checkUsername() {   
  //   let username = document.getElementById('username');
  //   let userValue = username.value;
  //   let notAvailUsername = document.getElementById('username-not-available');
  //   let xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       const data = JSON.parse(xhttp.responseText);
  //       if (data[0]) {
  //         username.style.borderColor = "red";
  //         notAvailUsername.innerHTML = "Username is not available!";
  //       } else {
  //         if (!username.checkValidity()) {
  //           username.style.borderColor = "red";
  //           notAvailUsername.innerHTML = "Please input alphanumeric, number, and underscore";
  //         } else {
  //           username.style.borderColor = "green";
  //           notAvailUsername.innerHTML = "";
  //         }
  //       }
  //     }
  //   };
  //   xhttp.open("GET", url+"/api/users/admin" + userValue, true);
  // }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 mt-3 font-bold">
                  <small>Sign up with credentials</small>
                </div>
                <form action={url}>
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
                      minlength="5"
                      name="username"
                      placeholder="Username"
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
                      minlength="5"
                      name="password"
                      placeholder="Password"
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
                      type="button"
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
    </>
  );
}
