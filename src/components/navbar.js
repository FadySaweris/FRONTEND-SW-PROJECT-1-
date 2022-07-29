import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { useHistory } from "react-router-dom";

import navbar from './NavBar.module.css';

class NavBar extends Component {



  constructor(props) {
    super(props)

    this.state = {

    }

  }


  render() {

    const { active, items, setActive, history } = this.props

    return (

      <div className={navbar.NavBarContainerStyle}>
        <ul className={navbar.NavBarStyle}>
          {items?.map((item, index) => (
            <NavItem
              key={item.name}
              onClick={() => {
                history?.push('/')
                setActive(index)
              }}
              isActive={index === active}
            >
              {item.name.toUpperCase()}
            </NavItem>
          ))}
        </ul>

        <p className={navbar.NavBarStyleTwo} onClick={() => history?.push('/cart')}>CART</p>
      </div>


    )
  }


}






export default NavBar;

class NavItem extends Component {
  render() {
    const { children, isActive, ...rest } = this.props

    return (

     <ul className={navbar.NavBarStyle1}>


     <li
        {...rest}
        className={` ${isActive? navbar.NavItemStyle2 : ""}
        `}
 
      >
        {children}
      </li>


     </ul>
    )
  }
}













// const Navbar = (props) => {
//   const { active, items, setActive } = props;
//   const history = useHistory()

//   return (
//     <div className='flex justify-between'>
//     <ul className="flex items-center gap-4 py-4 px-16">
//       {items?.map((item, index) => (
//         <NavItem
//           key={item.name}
//           onClick={() => {
//             history.push('/')
//             setActive(index)
//           }}
//           isActive={index === active}
//         >
//           {item.name.toUpperCase()}
//         </NavItem>
//       ))}
//     </ul>

//         <p className='px-16 py-5 cursor-pointer' onClick={() => history.push('/cart')}>Cart</p>
//     </div>
//   );
// };

// const NavItem = ({ children, isActive, ...rest }) => {
//   return (
//     <li
//       {...rest}
//         isActive ? "border-b-4 border-green-600 text-green-600" : ""
//       }`}
//     >
//       {children}
//     </li>
//   );
// };

// export default Navbar;
