import React from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import NavbarLink from './NavbarLink'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
            <Link href="/">
              <a
                // href="/"
                // onClick={() => router.push('/')}
                className="text-2xl lg:text-4xl md:text-3xl  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-green-900"
              >
                Richard Smith
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none  border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {(!navbarOpen ? <svg viewBox="0 0 24 24" className="h-6 m-6 stroke-current fill-current text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg> :
              <svg viewBox="0 0 24 24" className="h-6 m-6 stroke-current fill-current text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>)}
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center bg-red-200" + (navbarOpen ? " flex z-10" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavbarLink href="/about">
                About Me
              </NavbarLink>
              <NavbarLink href="/projects">
                Projects
              </NavbarLink>
              <NavbarLink href="/work">
                Work
              </NavbarLink>
              <NavbarLink href="/blog">
                Blog
              </NavbarLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}