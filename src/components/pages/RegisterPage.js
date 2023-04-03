import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Únete a nosotros</h2>
            <h5>Crea tu cuenta personal</h5>
            <form action="/home">
                <p>
                    <label>Nombre de Usuario</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Direccion de Correo electronico</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Contraseña</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Estoy de acuerdo con todas las declaraciones en <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Registro</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Volver a la página de inicio</Link>.</p>
            </footer>
        </div>
    )

}
