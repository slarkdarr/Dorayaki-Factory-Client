import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-small"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                  WBD
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://gitlab.informatika.org/daffan02"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Daffa Ananda P. R.
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.informatika.org/f_aziz14"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Faris Aziz
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.informatika.org/mhmmdjafarg"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
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
