import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Reestablecer contraseña</h2>
            <h5>Ingrese su dirección de correo electrónico y le enviaremos una nueva contraseña</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Dirección de correo electrónico</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar correo electrónico de restablecimiento de contraseña</button>
                </p>
            </form>
            <footer>
                <p>¿Primera vez? <Link to="/register">Crea una cuenta</Link>.</p>
                <p><Link to="/">Volver a la página de inicio</Link>.</p>
            </footer>
        </div>
    )
}
