import React from 'react'
import { NavLink } from "react-router-dom";

const TabLink = ({link, name}) => {
  return (
    <NavLink
            to={link}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending px-4 py-2 rounded-lg "
                : isActive
                ? " px-4 py-2 rounded-lg active text-buttonColor bg-tabColor"
                : " px-4 py-2 rounded-lg "
            }
          >
            {name}
          </NavLink>
  )
}

export default TabLink
