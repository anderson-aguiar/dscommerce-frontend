import './styles.css';

import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';

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

export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="dsc-container">
                <SearchBar />
                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />

                </div>
                <ButtonNextPage text='Comprar mais' />
            </section>
        </main>
    );
}