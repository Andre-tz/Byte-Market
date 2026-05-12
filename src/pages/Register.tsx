import AuthInput from "../components/ui/AuthInput";

const Register = ()=>{
    return(
        <main>
            <div>
                <div>
                    <section>
                        <span>Byte Market Join</span>
                        <h1>Crea tu cuenta</h1>
                        <p>Regístrate para guardar tus productos favoritos, gestionar tus pedidos y disfrutar una experiencia de compra más rápida en Byte Market.</p>
                    </section>

                    <form action="">
                        <AuthInput 
                            labelText="Nombres"
                            inputType="text"
                            id="name"
                            placeholder="Ingresa tu nombre"
                        />

                        <AuthInput 
                            labelText="Apellidos"
                            inputType="text"
                            id="last-name"
                            placeholder="Ingresa tus apellidos"
                        />

                        <AuthInput 
                            labelText="Correo Electrónico"
                            inputType="email"
                            id="email"
                            placeholder="Ingresa tu correo electrónico"
                        />

                        <AuthInput 
                            labelText="Contraseña"
                            inputType="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                        />

                        <AuthInput 
                            labelText="Confirmar Contraseña"
                            inputType="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                        />
                    </form>
                </div>
            </div>
        </main>
    )
}
export default Register; 