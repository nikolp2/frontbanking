import React from 'react'
import { useSelector } from 'react-redux';


const Header = () => {
    const user = useSelector((store) => store.authReducer.user);
    const username = user.name;
  return (
    <div>
        <header className="flex items-center justify-between w-full px-4 py-2">
          <div className="flex items-center">
            <img alt="Logo" className="h-8 w-8 mr-2" src="/placeholder.svg" />
            <h1 className="text-yellow-400 text-lg font-bold">
              Welcome, + {username}
            </h1>
          </div>
          <button className="text-yellow-400">Logout</button>
        </header>
    </div>
  )
}

export default Header