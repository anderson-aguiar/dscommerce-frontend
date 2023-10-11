import './styles.css';
import computerImg from '../../assets/computer.png';
import ProductCategory from '../ProductCategory/index.tsx';
export default function ProductDetailsCard() {

    return (
        <>
            <div className="dsc-card dsc-mb20">
                <div className="dsc-product-details-top dsc-line-bottom">
                    <img src={computerImg} alt="Computador" />
                </div>
                <div className="dsc-product-details-bottom">
                    <h3>R$ 5000,00</h3>
                    <h4>Computer Gamer XT</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                        voluptas possimus expedita sit saepe reiciendis corrupti itaque,
                        doloremque perferendis, ipsum aperiam corporis officia! Ab iure
                        nesciunt, enim sit distinctio saepe!
                    </p>
                    <div className="dsc-category-container">
                        <ProductCategory />
                        <ProductCategory />
                    </div>
                </div>
            </div>
        </>
    );
}