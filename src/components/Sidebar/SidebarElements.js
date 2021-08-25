import { FaBars } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import * as AiIcons from "react-icons/ai";

export const Nav = styled.nav`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border: solid 5px white;
background: #fef5ed;
height: 130px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1300px) / 2);
z-index: 12;
&:hover{

}
@media screen and (max-width: 368px) {
	// position: relative;
}
`;

export const NavBrand = styled.div`
width: 320px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
height: 100%;
cursor: pointer;
&.active {
	
}
@media screen and (max-width: 960px) {
	width: 220px;
}
@media screen and (max-width: 768px) {
	width: 150px;
}
`;

export const Brand = styled.img`
width: calc(80px + 2vmin);
margin-left: 10px;
`;

export const NavMenu = styled.div`
padding: 0px 80px 0px 0px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 1280px) {
	font-size: 12px;
	// padding: 0 50px;
}
@media screen and (max-width: 960px) {
	display: none;
}
`;

export const NavLink = styled(Link)`
color: #213472;
font-size: 14px;
font-weight: 500;
text-align: center;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
margin-left: 34px;
text-decoration: none;
height: 100%;
cursor: pointer;
&:hover{
	color: tomato;
}
&.active {
	color: dodgerblue;
}
@media screen and (max-width: 1280px) {
	font-size: 12px;
	margin-left:15px;
}
`;

export const NavBtn = styled.nav`
margin-right: -80px;
font-size: 14px;
width: calc(1200px + 2vmin);
display: flex;
align-items: center;
justify-content: end;
@media screen and (max-width: 1280px) {
	width: calc(900px + 1vmin);
	font-size: 11px;
}
@media screen and (max-width: 960px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #213472;
color: #fff;
color: pink;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
padding: 8px 0px;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: tomato;
	color: #fff;
}
`;

export const Login = styled(FaUserCircle)`
color: #fff;
font-size: 16px;
&:hover {
	color: #213472;
}
`;

export const NavIcon = styled(Link)`
width: 100px;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-end;
align-items: center;
`;

export const Bars = styled(FaBars)`
margin: 30px 0;
display: none;
color: #213472;
&:hover{
	color: tomato;
}
@media screen and (max-width: 960px) {
	display: block;
    color: #213472;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(40%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const SidebarNav = styled.nav`
color: #fff;
background: #213472;
opacity: 1;
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

export const SidebarWrap = styled.div`
margin-left: 1rem;
width: 80%;
display: flex;
flex-direction: column;
margin-bottom: 60px;
text-align:center;

`;

export const SidebarLink = styled(Link)`
padding: 20px 0px;
padding-left: 2.7rem;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
list-style: none;
text-decoration: none;
font-size: 13px;
&:hover {
	border-left: 4px solid tomato;
	color: #fff;
	cursor: pointer;
}
`;

export const SidebarLabel = styled.div`
text-align: center;
`;

export const CloseContainer = styled.div`
color: #fff;
font-size: 40px;
font-size: 2rem;
display: flex;
justify-content: flex-end;
align-items: center;
margin-bottom: 30px;
}
@media screen and (max-width: 960px) {
	margin-left: 210px;
}
@media screen and (max-width: 768px) {
	margin-left: 120px;
}
`;

export const CloseIcon = styled(AiIcons.AiOutlineClose)`
color: black;
&:hover{
	color: tomato;
}

`;

export const DropdownLink = styled(Link)`
background: #252831;
padding-left: 1rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 12px;

&:hover {
	color: #fff;
background:tomato;
cursor: pointer;
}
`;