import './styles.css';
import cartIcon from '../../assets/cart.svg';
import { ContextCartCount } from '../../utils/context-cart';
import { useContext } from 'react';


export default function CartIcon() {

    const { contextCartCount } = useContext(ContextCartCount);
    return (
        <>
            <img src={cartIcon} alt="Carrinho de compras" />
            {
                contextCartCount > 0 &&

                <div className='dsc-cart-count'>{contextCartCount}</div>
            }
        </>

    );
}