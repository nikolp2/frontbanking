import React from 'react'
import { Link } from 'react-router-dom'


const SideMenu = () => {
  return (
    <div>
        <nav className="flex flex-col items-center justify-center h-full">
          <Link className="text-yellow-400 py-4" to={"./pages/NewAccount.jsx"}>
            New Account
          </Link>
          <Link className="text-yellow-400 py-4" href="#">
            New Loan
          </Link>
          <Link className="text-yellow-400 py-4" href="#">
            New Transaction
          </Link>
        </nav>
    </div>
  )
}

export default SideMenu