import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDatailsCard from '../../components/ProductDetailsCard';
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "TV de ultima geração com 4K de resolução",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/9b5846b1157b296c3012f16c817f70ad1929fa6f/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importados"
        }
    ]
}

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-datails-section" className="dsc-container">
                    <ProductDatailsCard product={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>
        </>
    );
}