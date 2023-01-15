import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const Navbar = () => {
    const navigate = useNavigate()
    const {logout, email} = useContext(AuthContext)

    const onLogout =() => {
        logout()

        navigate('/auth/login', {
            replace: true
        })
    }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/">
          Inversiones
        </Link>


        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            {
              email ? <button className="nav-item nav-link btn"
              onClick={onLogout}
              >
               <ExitToAppIcon/> Salir
              </button>: null
            }
          </ul>
        </div>
      </nav>
    </>
  );
};
