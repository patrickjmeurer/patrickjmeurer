const Footer: React.FC = () => {
  return (
    <footer className="mb-[50px] mt-[150px] flex w-full flex-1 flex-col justify-between md:flex-row">
      <div className="order-last mt-10 flex flex-col md:order-first md:mt-0">
        <div className="flex-1">
          <p>logo</p>
          <p className="mt-5 text-sm">Thanks for stopping by ッ</p>
        </div>
        <p className="text-sm">
          © 2024 Patrick Jean Meurer. All Rights Reserved.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div>
          <h4 className="mb-5 font-bold">Links</h4>
          <div className="flex flex-col gap-2">
            <a href="/">About</a>
            <a href="/">Works</a>
            <a href="/">Tech Stack</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="mb-5 font-bold">Elsewhere</h4>
          <div className="flex flex-col gap-2">
            <a href="mailto:patrickjmeurer@gmail.com" target="_NEW">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/patrickjeanmeurer"
              target="_NEW"
            >
              Linkedin
            </a>
            <a href="https://github.com/patrickjmeurer" target="_NEW">
              Github
            </a>
            <a href="https://gitlab.com/patrickjmeurer" target="_NEW">
              Gitlab
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
