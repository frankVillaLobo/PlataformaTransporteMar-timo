import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';
import '../../css/reset.css';
import '../../css/bootstrap.css';
import '../../css/styles.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';

function NavBar () {
	return (
			<nav className="navbar navbar-expand-lg navbar-dark  d-flex justify-content-between" styles="top" >
				<img className="navbar-brand"  src={logo} width="160" height="120" alt="" /><span className="eslogan text-white">Te llevamos a buen puerto!</span>
						<div className="container-fluid ">
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse " id="navbarNavDropdown">
								<div d-flex-column d-xl-flex justify-content-between w-100 >
								</div>
								<ul className="navbar-nav ml-auto ">
									<li className="nav-item">
										<Link className="link--nav nav-link dropdown-item" to="/">Inicio</Link>
									</li>
									
									<li className="nav-item">
										<Link className="link--nav nav-link dropdown-item" to="/products">Puertos</Link>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Empresa
										</a>
										<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
											<Link className="link--nav  dropdown-item" to="/category/portatiles">Quienes somos</Link>
											<Link className="link--nav  dropdown-item" to="/category/mouse">Politicas</Link>
											<Link className="link--nav  dropdown-item" to="/category/monitor">Organigrama</Link>
										</ul>
									</li>
									<li className="nav-item">
										<Link className="link--nav nav-link dropdown-item" to="/contact">Rutas</Link>
									</li>
									<li className="nav-item">
										<Link className="link--nav nav-link dropdown-item" to="/contact">Flota</Link>
									</li>
									<li className="nav-item">
										<Link className="link--nav nav-link dropdown-item" to="/login">Login</Link>
									</li>
									<li className="nav-item">
										<Link className="link--nav nav-link dropdown-item" to="/login">Alianzas comerciales</Link>
									</li>
									<li className="nav-item">
										<Link className="link--nav nav-link dropdown-item" to="/login">Contacto</Link>
									</li>
									<CartWidget></CartWidget>
								</ul>
								
							</div>
						</div>
			</nav>
);
}
export default NavBar;