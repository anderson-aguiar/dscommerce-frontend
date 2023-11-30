import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDatailsCard from '../../../components/ProductDetailsCard';
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import { ContextCartCount } from '../../../utils/context-cart';

export default function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();
    
    //desestruturação do objeto para atualizar um estado global, neste caso a quantidade de intens do carrinho
    const {setContextCartCount} = useContext(ContextCartCount); 

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
            .then(response => {
                setProduct(response.data);
            })
            .catch(() => {
                navigate("/");
            });

    }, []);
    function handleBuyClick() {
        if (product) {
            cartService.addProduct(product);
            setContextCartCount(cartService.getCart().items.length);
            navigate("/cart");
        }
    }
    return (
        <main>
            <section id="product-datails-section" className="dsc-container">
                {
                    product &&
                    <ProductDatailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <div onClick={handleBuyClick}>
                        <ButtonPrimary text='Comprar' />
                    </div>
                    <Link to={"/"}>
                        <ButtonInverse text='Inicio' />
                    </Link>
                </div>
            </section>
        </main>
    );
}