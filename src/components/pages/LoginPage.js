import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Inicia sesión para nosotras/os</h2>
            <form action="/home">
                <p>
                    <label>Nombre de usuario O correo </label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Contraseña</label>
                    <br/>
                    <input type="password" name="password" required />
                    <br/>
                    <Link to="/forget-password"><label className="right-label">¿Has olvidado la contraseña?</label></Link>

                </p>
                <p>
                    <button id="sub_btn" type="submit">Inicia</button>
                </p>
            </form>
            <footer>
                <p>¿Primera vez? <Link to="/register">Crea una cuenta</Link>.</p>
                <p><Link to="/">Volver a la página Principal</Link>.</p>
            </footer>
        </div>
    )
}
