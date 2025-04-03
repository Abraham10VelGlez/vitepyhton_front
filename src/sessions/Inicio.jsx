import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Inicio() {

    const navigate = useNavigate();
    const close = async () => {

        try {
            const apiUrl = import.meta.env.VITE_URL_BACKEND_EXPRESSJS_API
            // Llamar a la API para eliminar la sesión
            const token = sessionStorage.getItem('jwt_avg') || Cookies.get('jwt_avg') || null;
            await fetch(`${apiUrl}logout`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include' // Equivalente a withCredentials: true
            });
            // Limpiar el session
            sessionStorage.removeItem('jwt_avg');
            Cookies.remove('jwt_avg'); // Asegúrate de eliminar la cookie si no es válida        
            // Redirigir a la página de inicio de sesión
            navigate('/', { replace: true });
        } catch (error) {
            console.error("Error al cerrar sesión", error);
        }

    }
    return (
        <>

            <div className="mockup-browser border border-base-300 w-full">
                <div className="mockup-browser">
                    <div className="drawer">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            {/* Navbar */}
                            <div className="navbar bg-base-300 w-full">
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-6 w-6 stroke-current">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                    </label>
                                </div>
                                <div className="mx-2 flex-1 px-2">
                                    <p className="font-bold">
                                        ClubPythonBoy
                                    </p>
                                </div>
                                <div className="hidden flex-none lg:block">
                                    <ul className="menu menu-horizontal">
                                        {/* Navbar menu content here */}
                                        <li><a>Navbar Item 1</a></li>
                                        <li><a>Navbar Item 2</a></li>
                                    </ul>

                                </div>

                                <div className="hidden flex-none lg:block">
                                    <ul className="menu menu-horizontal">
                                        <div className="drawer drawer-end">
                                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                            <div className="drawer-content">
                                                {/* Page content here */}
                                                <label htmlFor="my-drawer-4" className="drawer-button btn btn-error"><h1 className="text-3xl font-bold">⚙️</h1></label>
                                            </div>
                                            <div className="drawer-side">
                                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                                    {/* Sidebar content here */}
                                                    <li><a>Perfil</a></li>
                                                    <li><a onClick={() => close()}>Finish Session</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>

                                </div>

                            </div>
                            <center>
                                <h1 className="text-5xl font-bold">WELCOME PYTHON BOY</h1>
                            </center>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                                <li><a>Perfil</a></li>
                                <li><a onClick={() => close()} >Finish Session</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="grid place-content-center h-150">



                    <div
                        className="hero min-w-screen"
                        style={{
                            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                        }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>








                </div>
            </div>



            <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
                <aside>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <img
                                    width="150"
                                    height="150"
                                    viewBox="0 0 24 24"
                                    xmlns=""
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    className="inline-block fill-current"
                                    src="https://img.daisyui.com/images/daisyui-logo/daisyui-logotype.svg"></img>
                            </a>
                            <a>
                                <img
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    xmlns=""
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    className="inline-block fill-current"
                                    src="https://vite.dev/logo.svg"></img>
                            </a>
                            <a>
                                <img
                                    width="150"
                                    height="150"
                                    viewBox="0 0 24 24"
                                    xmlns=""
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    className="inline-block fill-current"
                                    src="https://flask.palletsprojects.com/en/stable/_images/flask-horizontal.png"></img>
                            </a>
                        </div>
                    </nav>
                    <p className="font-bold">
                        StudioA. by Abraham10VelGlez
                    </p>
                    <p>Copyright © {new Date().getFullYear()}, VITE + FLASK PYTHON - Versión Beta 5.{new Date().getFullYear()}.1.1</p>
                </aside>

            </footer>
        </>
    )
}


