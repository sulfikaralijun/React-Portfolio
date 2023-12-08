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
          <img src="/src/assets/image/Logo.png" alt="Logo" className="w-10 rounded-full" />
          <h1 className="font-mono font-semibold text-[1.2rem] text-slate-800">Sulfikar Alijun</h1>
        </a>
        <nav className="flex gap-3 bg-slate" >
          {navbarItems.map((item, index) => (
              <a className="text-[1.2rem] py-1 px-3 rounded-tr-2xl rounded-bl-2xl border-2 border-slate-300 text-slate-900 hover:-translate-y-1 duration-200" style={{backgroundColor: item.isActive ? "rgb(148, 163, 184)" : ""}} href={item.link} key={index}>{item.name}</a>
            )
          )}
        </nav>
    </header>
  )
}

export default Navbar
