import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDatailsCard from '../../../components/ProductDetailsCard';
import * as productService from '../../../services/product-service';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function ProductDetails() {
    const params = useParams();
    const product = productService.findById(Number(params.productId));
    return (
        <main>
            <section id="product-datails-section" className="dsc-container">
                {
                    product &&
                    <ProductDatailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <ButtonPrimary text='Comprar' />
                    <Link to={"/"}>
                        <ButtonInverse text='Inicio' />
                    </Link>
                </div>
            </section>
        </main>
    );
}