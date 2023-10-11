import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDatailsCard from '../../components/ProductDetailsCard';

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-datails-section" className="dsc-container">
                    <ProductDatailsCard />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>
        </>
    );
}