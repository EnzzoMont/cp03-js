import NavBar from "../NavBar/Navbar"
import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = ({user, isLogged, button}) => {
  console.log(user)
  return (
    <div className="p-5 bg-black dark:bg-dark-200">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between">
        {isLogged ? ( 
          <div className="flex gap-2 items-center">
            <img src={user.picture} alt="profile" className="rounded-full h-8 w-8" />
            <span className="text-gray-100 font-semibold">Olá {user.given_name} /</span>
            {button}
          </div>
        ) : (
          <span className="text-gray-100 font-semibold">Olá, Visitante</span>
        )}
        <h1 className="text-gray-100 text-2xl sm:text-4xl text-center my-4 md:my-0 font-Orbitron gap-3 font-semibold">Bem-vindo!</h1>
        <div className="flex justify-end items-center">
          <NavBar/>
          <ToggleTheme />
        </div>
      </div>
    </div>
  )
}

export default Header
