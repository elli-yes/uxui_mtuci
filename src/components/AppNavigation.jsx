import AppButton from "./AppButton"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function AppNavigation() {
  const location = useLocation()
  console.log(location);
  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex justify-center flex-wrap content-center space-x-3 bg-white">
      <Link to={'home'}>
        <AppButton style={ location.pathname === '/home' ? {borderBottom: 'black 1px solid'} : {}}>
          Главная
        </AppButton>
      </Link>
      <Link to={'tasks'}>
        <AppButton style={ location.pathname === '/tasks' ? {borderBottom: 'black 1px solid'} : {}}>
          Задания
        </AppButton>
      </Link>
    </div>
  )
}

export default AppNavigation
