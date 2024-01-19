import './styles.css';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import productsIcon from '../../assets/products.svg'
import LoggedUser from '../LoggedUser';
import { NavLink } from 'react-router-dom';

export default function HeaderAdmin() {
    return (
        <>
            <header className="dsc-header-admin">
                <nav className="dsc-container">
                    <Link to={"/admin/"}>
                        <h1>DSC Admin</h1>
                    </Link>
                    <div className="dsc-navbar-right">
                        <div className="dsc-menu-items-container">
                            {/*(isActive) => Ativa o negrito quando a página estiver selecionada*/}
                            <NavLink to={"/admin/home"} className={({ isActive }) => isActive ? 'dsc-menu-item-active' : ""}>
                                <div className="dsc-menu-item">
                                    <img src={homeIcon} alt="Início" />
                                    <p>Início</p>
                                </div>
                            </NavLink>
                            <NavLink to={"/admin/products"} className={({ isActive }) => isActive ? 'dsc-menu-item-active' : ""}>
                                <div className="dsc-menu-item">
                                    <img src={productsIcon} alt="Cadastro de produtos" />
                                    <p>Produtos</p>
                                </div>
                            </NavLink>
                        </div>
                        <LoggedUser />
                    </div>
                </nav>
            </header>
        </>
    );
}