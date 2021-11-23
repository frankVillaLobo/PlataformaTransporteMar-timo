import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/reset.css';
import '../../css/bootstrap.css';
import '../../css/styles.css';

function Footer () {
	return (
        
        <footer className="">
            <div className="row secfoot">
                    <div className="col-md-9 align-self-left foot">
                        © 2021 Takíon 
                        <br></br>Dirección - Barranquilla - Colombia
                        <br></br>(+ 57 1) xxx-xx-xx
                        <br></br>Cel.:(+ 57) xxx-xxx-xx-xx
                        <br></br>contacto@takion.com.co
                    </div>
                    <div className="col-md-3 align-self-end foot">
                        <p className="creador ">Sitio Creado Por	
                        <a href="https://twitter.com/GerLoaiza" className="creador"> Germán Loaiza</a>
                        </p>
                    </div>	
            </div>
    
            <div className="title6">
                <div className="row">
                    <section className="col-md-12">
                        <h6 className="">TAKÍON - Todos los Derechos Reservados &copy; 2021</h6>
                    </section>	
                </div>	
            </div>
        </footer>
    );
}
export default Footer;