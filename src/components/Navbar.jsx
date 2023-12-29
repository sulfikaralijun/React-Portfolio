import logo from '../assets/image/Logo.png'

const Navbar = () => {
  const navbarItems = [ 
    {name: "Home", link: "#home", isActive: false},
    {name: "About", link: "#about", isActive: false},
    {name: "Skills", link: "#Skills", isActive: false},
    {name: "Portfolio", link: "#portfolio", isActive: false},
    {name: "Certificate", link: "#certificate", isActive: false},
    {name: "Contact", link: "#contact", isActive: true},
  ]


  return (
    <header className="absolute w-full left-0 px-10 py-5 flex items-center justify-between backdrop-blur-sm">
        <a href="#" className="flex gap-3 items-center">
          <img src={logo} className="w-10 rounded-full" />
          <h1 className="font-mono font-semibold text-[1.2rem] text-slate-800">Sulfikar Alijun</h1>
        </a>
        {/* <nav className="flex gap-3 bg-slate" >
          {navbarItems.map((item, index) => (
              <a className="text-[1.2rem]  py-1 px-3 rounded-tr-2xl rounded-bl-2xl border-2 border-slate-300 text-slate-900 hover:-translate-y-1 duration-200" style={{backgroundColor: item.isActive ? "rgb(148, 163, 184)" : ""}} href={item.link} key={index}>{item.name}</a>
            )
          )}
        </nav> */}
        <nav className="absolute max-w-375  right-7  top-[100%] py-6 float-right flex flex-col items-center gap-1 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-[rgba(0,0,0,0.5)] max-w-[320px] 375px:min-w-[320px]" >
          {navbarItems.map((item, index) => (
              <a className=" w-[82%] text-center text-[1.1rem] py-1 rounded-full bg-slate-50  text-slate-900" style={{backgroundColor: item.isActive ? "#00FFEE" : ""}} href={item.link} key={index}>{item.name}</a>
            )
          )}
        </nav>
    </header>
  )
}

export default Navbar
