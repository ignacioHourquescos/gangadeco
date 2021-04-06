import React from 'react';
// import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
// import useAppContext from '../../Context/UseAppContext';
import './BurgerMenu.scss';


const BurgerMenu = () => {
	
	// const { menuIsOpen, closeMenu } = useAppContext();
	//const{menu, setMenu}=useState();



	// useEffect(() => {
	// 	//closeMenu();
	// 	//  alert("este es el valor de la varaible de burger " + menuIsOpen);
	// }, [closeMenu]);

	return (<>

		<Menu className="side_bar_menu" left  >
			<div className="transparent_overlay" >

				{/* <ul><Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}  onClick={() => closeMenu()}>Home</Link></ul>
				<ul><Link style={{ textDecoration: 'none', color: 'white' }} to={'/agenda'}  onClick={() => closeMenu()} >Agenda</Link></ul>
				<ul><Link style={{ textDecoration: 'none', color: 'white' }} to={'/partnerList'} onClick={() => closeMenu()} >Socios</Link></ul>
				<ul><Link style={{ textDecoration: 'none', color: 'white' }} to={'/quienessomos'} onClick={() => closeMenu()} >Quienes Somos</Link></ul>
				<ul><Link style={{ textDecoration: 'none', color: 'white' }} to={'/faq'} onClick={() => closeMenu()} >Preguntas</Link></ul> */}
				
			</div>

		</Menu>

	</>);
}


export default BurgerMenu;


