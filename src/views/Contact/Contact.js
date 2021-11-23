import React from 'react';
import 'bootstrap/dist/js/bootstrap.js';

function Contact() {
    return (
        <div className="">
            <section class="container ">
                    <br/><br/><br/><br/>
                    <h2 class="title2 wow animate__animated animate__backInDown">Contactenos</h2>
                    
                    
                    <div class="formulario_contenedor">
                        <div class="row ">
                            <div class="col-md-9 container">
                                    <h4 class="title_form col-md-12 wow animate__animated animate__backInLeft">Déjanos tus datos para contactarte</h4>
                                                                
                                        <form action="" method="POST" class="form-inline">
                                            <div class="container">
                                                <div class="mailpoet_paragraph form-group">				
                                                    <label  class="label_requeri wow animate__animated animate__fadeInLeft" id="input_subs" for="fullName">Nombres y Apellidos</label><input type="email" class="mailpoet_text input_subs form-sm wow animate__animated animate__fadeInRight" id="input_fullname" name="" title="Nombre Completo"  placeholder="Nombre Completo*" /> 
                                                </div>	

                                                <div class="mailpoet_paragraph form-group">				
                                                    <label  class="label_requeri wow animate__animated animate__fadeInLeft" id="input_subs" for="telefono">Numero Celular</label><input type="email" class="mailpoet_text input_subs form-sm wow animate__animated animate__fadeInRight" id="input_fullname" name="" title="Numero Contacto"  placeholder="Numero de Contacto*" /> 
                                                </div>
                                                
                                                <div class="mailpoet_paragraph form-group">				
                                                    <label  class="label_requeri wow animate__animated animate__fadeInLeft" id="input_subs" for="email">Correo Electrónico</label><input type="email" class="mailpoet_text input_subs form-sm wow animate__animated animate__fadeInRight" id="input_fullname" name="" title="Correo Electronico"  placeholder="Correo Electronico*" /> 
                                                </div>

                                                <div class="mailpoet_paragraph form-group">				
                                                    <label  class="label_requeri wow animate__animated animate__fadeInLeft" id="input_subs" for="city">Ciudad</label><input type="email" class="mailpoet_text input_subs form-sm wow animate__animated animate__fadeInRight" id="input_fullname" name="" title="Ciudad"  placeholder="Ciudad Residencia*" /> 
                                                </div>

                                                <div class="mailpoet_paragraph form-group">				
                                                    <label  class="label_requeri wow animate__animated animate__fadeInLeft" id="input_subs" for="empresa">Nombre Empresa</label><input type="email" class="mailpoet_text input_subs form-sm wow animate__animated animate__fadeInRight" id="input_fullname" name="" title="Nombre Empresa"  placeholder="Empresa Labora*" /> 
                                                </div>


                                                <h4 class="title_form col-md-12 container wow animate__animated animate__backInRight">Especifica Tus Requerimientos</h4>

                                                <div class="mailpoet_paragraph form-group">	
                                                    <label  class="label_requeri col-md-9 wow animate__animated animate__bounceInDown" id="input_subs" for="servicio">¿Selecciona el Servicio que te Interesa?</label>
                                                </div>			
                                                <div>	
                                                    <select class="col-md-9 wow animate__animated animate__bounceInUp" name="Servicios" id="servicio" >
                                                        <option value="s1">Servicio1</option>
                                                        <option value="s2">Servicio2</option>
                                                        <option value="s3">Servicio3</option>
                                                        <option value="s4">Servicio4</option>
                                                        <option value="n/a">No Aplica</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
                                                </div>

                                                <div class="mailpoet_paragraph form-group">	
                                                    <label  class="label_requeri col-md-9 wow animate__animated animate__bounceInDown" id="input_subs" for="servicio">¿Selecciona el Producto que te Interesa?</label>
                                                </div>			
                                                <div>	
                                                    <select class="col-md-9 wow animate__animated animate__bounceInUp" name="Productos" id="producto" >
                                                        <option value="n/d">No Disponible</option>
                                                    </select>
                                                </div>		

                                                <div class="mailpoet_paragraph form-group">	
                                                    <label  class="label_requeri col-md-9 wow animate__animated animate__bounceInDown" id="input_subs" for="requerimientos">¿Describe con detalle tus requerimientos?</label>
                                                </div>
                                                <div>
                                                    <textarea  name="requerimientos" id="requerimientos" cols="37" rows="10" class="texta_requeri col-md-9 wow animate__animated animate__bounceInUp"></textarea>
                                                </div>	

                                                <div class="container">
                                                    <button class="button_requeri btn" type="submit" value="Enviar">
                                                        Enviar ✉
                                                    </button>
                                                    <button class="button_requeri btn" type="reset" value="Limpiar">
                                                        Borrar 🧹
                                                    </button>
                                                </div><br />
                                            </div>
                                        </form>	

                                        
                            </div>	
                        </div>			
                    </div>
            </section>
        </div>

    );
}
export default Contact;