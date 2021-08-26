import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";
import { 
	Nav,
  	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavBrand,
	Brand,
	Login, 
	NavIcon,
	SidebarNav,
	SidebarWrap,
	CloseContainer,
	CloseIcon,
} from "./SidebarElements";


const Sidebar = (props) => {

	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
		setSidebar(!sidebar);
	}

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
        <NavBrand >  
			<NavLink  to='/index' >
            	<Brand src='https://media.discordapp.net/attachments/701312584917450766/877161085348745276/logo.png'
				className="jello-horizontal1"/>
			</NavLink>
		</NavBrand>
        <NavMenu>
          <NavLink to='/index' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/programs' activeStyle>
            Programs
          </NavLink>
          <NavLink to='/educators' activeStyle>
            Educators
          </NavLink>
          <NavLink to='/admissions' activeStyle>
            Admissions
          </NavLink>
		  <NavLink to='/shop' activeStyle>
            Shop
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
		  <NavBtn>
          <NavBtnLink to='/login'>  <span style={{width:'25px',marginLeft:'-5px'}}><Login/></span>Log In </NavBtnLink>
          </NavBtn>
        </NavMenu>
		<NavIcon to="#">
			<Bars onClick={showSidebar} style={{color:'#213472'}} />
		</NavIcon>
		</Nav>

		<SidebarNav sidebar={sidebar}>	
			<CloseContainer>
				<CloseIcon onClick={showSidebar} style={{color:'#fff'}} /> 
			</CloseContainer>
			<SidebarWrap>	
				{SidebarData.map((item, index) => {
				return <SubMenu item={item} key={index} />;
				})}
			</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;