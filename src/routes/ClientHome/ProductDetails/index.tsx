import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDatailsCard from '../../../components/ProductDetailsCard';
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';

export default function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();

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