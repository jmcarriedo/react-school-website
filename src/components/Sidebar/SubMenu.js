import React, { useState } from "react";
import { 
	SidebarLink,
	SidebarLabel,
	DropdownLink,
} from "./SidebarElements";

const SubMenu = ({ item }) => {
const [subnav, setSubnav] = useState(false);

const showSubnav = () => setSubnav(!subnav);

return (
	<>
	<SidebarLink to={item.path}
	onClick={item.subNav && showSubnav}>
		<div>
		
		<SidebarLabel ><span style={{width:'0px',}}></span>{item.icon}{item.title}</SidebarLabel>
		</div>
		<div >
		{item.subNav && subnav
			? item.iconOpened
			: item.subNav
			? item.iconClosed
			: null}
		</div>
	</SidebarLink>
	{subnav &&
		item.subNav.map((item, index) => {
		return (
			<DropdownLink to={item.path} key={index}>
			{item.icon}
			<SidebarLabel>{item.title}</SidebarLabel>
			</DropdownLink>
		);
		})}
	</>
);
};

export default SubMenu;
