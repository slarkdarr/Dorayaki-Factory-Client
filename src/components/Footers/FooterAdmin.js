import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "} World Break Down
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://gitlab.informatika.org/daffan02"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Daffa Ananda P. R.
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.informatika.org/f_aziz14"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Faris Aziz
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.informatika.org/mhmmdjafarg"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Muhammad Jafar Gundari
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
