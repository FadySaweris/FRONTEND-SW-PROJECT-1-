import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  const { active, items, setActive } = props;
  const history = useHistory()

  return (
    <div className='flex justify-between'>
    <ul className="flex items-center gap-4 py-4 px-16">
      {items?.map((item, index) => (
        <NavItem
          key={item.name}
          onClick={() => {
            history.push('/')
            setActive(index)
          }}
          isActive={index === active}
        >
          {item.name.toUpperCase()}
        </NavItem>
      ))}
    </ul>

        <p className='px-16 py-5 cursor-pointer' onClick={() => history.push('/cart')}>Cart</p>
    </div>
  );
};

const NavItem = ({ children, isActive, ...rest }) => {
  return (
    <li
      {...rest}
      className={`py-4 px-4 cursor-pointer ${
        isActive ? "border-b-4 border-green-600 text-green-600" : ""
      }`}
    >
      {children}
    </li>
  );
};

export default Navbar;
