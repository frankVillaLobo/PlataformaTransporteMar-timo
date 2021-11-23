import React from 'react';
import img3 from '../../contenido/img3.png';
import ecopetrol from '../../contenido/ecopetrol.png';
import alcaldia from '../../contenido/alcaldia.png';
import pacific from '../../contenido/pacific.png';
import nutresa from '../../contenido/nutresa.png';
import cobertura from '../../contenido/cobertura.png';
import './Home.css';
import 'bootstrap/dist/js/bootstrap.js';

function Home() {
    return (
        <div>
			<br/><br/><br/>
            <h1 className="title1 container wow animate__animated animate__rollIn">Bienvenidos</h1>
			<section className="container " id="borderl">
				<div>
					<div className="row">
								
						<img src={img3} alt="" className="col-md-6 wow animate__animated animate__lightSpeedInLeft"/>
						<article className="col-md-6">
							<div className="pad"></div>
						<h3 className="title3 wow animate__animated animate__jackInTheBox"> Plataforma Transporte Marítimo/Fluvial de Mercancías</h3>
						<p className="wow animate__animated animate__flipInY">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo accusantium voluptate et reprehenderit voluptatum voluptatibus beatae omnis enim aut.</p>	
					</article>
					
					</div>
				</div>
			</section>

            <section className="container ">
				<div >
					<div className="row">
							<article className="col-md-6 ">
								<div className="pad"></div>
								<h3 className="title3 wow animate__animated animate__jackInTheBox">Nuestros Clientes</h3>
								<p className="wow animate__animated animate__flipInY">En nuestra trayectoria hemos tenido la oportunidad de realizar proyectos para empresas e instituciones ampliamente reconocidas en el ámbito nacional e.</p>							
							</article>
							
                            <section className="carousel-section col-md-6 wow animate__animated animate__lightSpeedInRight">
								<div className="container" id="carru">
									<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
                                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></li> 
                                    </div>

                                    <div className="carousel-inner">
										<div className="carousel-item active">
															<img src={nutresa} className="d-block w-100 carru" alt="..."/>
														</div>
														<div className="carousel-item">
															<img src={pacific} className="d-block w-100 carru" alt="..."/>
														</div>
														<div className="carousel-item">
															<img src={ecopetrol} className="d-block w-100 carru" alt="..."/>
														</div>
														<div className="carousel-item">
															<img src={alcaldia} className="d-block w-100 carru" alt="..."/>
														</div>  
										</div>
										<ol className="carousel-control-prev" type="Button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
											<span className="carousel-control-prev-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Previous</span>
										</ol>
										<ol className="carousel-control-next" type="Button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
											<span className="carousel-control-next-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Next</span>
										</ol>
									</div>
                                </div>
							</section>
					</div>
				</div>
			</section>

				<div class="container">
					<div class="row ">
						<article class="article2 col-md-12">
							<h3 class="title3 wow animate__animated animate__zoomIn" id="t3"> Cobertura</h3>
							<img className="map_col wow animate__animated animate__zoomInDown img-fluid"	src={cobertura} alt=""/>
							<div class="container col-md-9">
							<p class="parrafo__cobertura ">Realizamos obras en todo el territorio nacional, tanto en zonas urbanas como en zonas rurales incluso de difícil acceso.</p>
							</div>
						</article>
					</div>
				</div>

			<div class="after-post-content">
					<div class="row">
						<div class="subscription-single alignwide col-md-12 wow animate__animated animate__flipInY"><p class="p_subs">¿Quieres recibir <strong>gratis</strong> contenidos exclusivos?</p>
							<form target="_self" method="post" action="" >
								<div class="mailpoet_paragraph ">
									<input 	type="email" class="mailpoet_text input_subs" id="input_email" name="" title="Correo Electrónico"  placeholder="Correo Electrónico *" /><input  type="submit" class="mailpoet_submit input_subs" id="input_subs" value="¡Suscríbete!"/>
								</div>
								<div class="">
								</div>
								<div class="mailpoet_paragraph ">
									<label class="mailpoet_checkbox_label">
										<input lass="input_pol"	type="checkbox" class="mailpoet_checkbox"/> He leído y acepto la política de privacidad.
									</label><span class=""></span></div>
								<div class="mailpoet_paragraph last"><a class="poli_takion" href="">Política de Privacidad</a></div>
							</form>
						</div>
					</div>
				
			</div>	
        </div>
    )
}
export default Home;