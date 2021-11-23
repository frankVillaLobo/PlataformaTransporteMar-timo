import React from 'react';
// import img3 from '../../contenido/img3.png';
// import ecopetrol from '../../contenido/ecopetrol.png';
// import alcaldia from '../../contenido/alcaldia.png';
// import pacific from '../../contenido/pacific.png';
// import nutresa from '../../contenido/nutresa.png';
// import cobertura from '../../contenido/cobertura.png';
import './Login.css';

import 'bootstrap/dist/js/bootstrap.js';

function Login() {
    return (
        
        <div>
            <div className="container">

                
                <h2 class="fw-bold text-center pb-5">Bienvenidos</h2>
                
                <form action="" method="POST" class="form_login">
                    <div class="mb-3">
                                
                        <label for="correo" class="form-label">UserName</label>
                        <input type="email" class="form-control" name="correo" id="correo" />
                        
                    </div>

                    <div class="mb-5">

                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" name="password" id="password" />
                    
                    </div>

                    <div class="d-grid gap-2 col-10 mx-auto">
                    
                        <button type="submit" class="btn boton-ingreso fw-bold p-2">Iniciar sesión</button>

                    </div>

                </form>

                    <div class="my-3 ms-5 fw-bold"><a href="{{url_for('recuperarPassword')}}">¿Olvidaste tu contraseña?</a></div>
                        
                        <a href="{{url_for('registro')}}" class="ir-registro">
                            <div class="d-grid gap-2 col-7 mx-auto">
                                <button class="btn boton-registro fw-bold p-2">Crea tu cuenta</button>
                            </div>
                        </a>
                    </div>    
        </div>
    )
}
export default Login;