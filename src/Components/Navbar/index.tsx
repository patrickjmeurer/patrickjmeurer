import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="w-full">
        <div className="navbar hidden flex-1 items-center justify-between rounded-lg bg-[rgba(var(--navbar-bg-color-rgba))] bg-opacity-30 p-3 text-[rgb(var(--navbar-text-color-rgb))] md:flex">
          <div className="flex-column flex flex-1 gap-10">
            <a href="/">
              <p>logo</p>
            </a>
            <a>
              <p>about</p>
            </a>
            <a>
              <p>work</p>
            </a>
            <a>
              <p>contact</p>
            </a>
          </div>
          <div className="flex-column flex items-center gap-3">
            <a href="https://github.com/patrickjmeurer" target="_NEW">
              <GithubLogo size="25" />
            </a>
            <a href="https://gitlab.com/patrickjmeurer" target="_NEW">
              <GitlabLogo size="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/patrickjeanmeurer"
              target="_NEW"
            >
              <LinkedinLogo size="25" />
            </a>
            {/* <hr className="divide-x-2 divide-white" />
        <p>Dark/light theme</p> */}
          </div>
        </div>
        <div className="align-center flex justify-center md:hidden">
          <h2>logo</h2>
        </div>
      </nav>
    </>
  )
}

export default Navbar
