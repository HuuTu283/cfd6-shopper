
import { useTranslate } from "../../../core/Translate";
import BrandsComp from "./BrandsComp";

export default function Brands() {
    let { t } = useTranslate();
    return (
        <section className="py-12 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h2 className="mb-3">{t('@shopper')}</h2>
                        {/* Subheading */}
                        <p className="mb-10 font-size-lg text-gray-500">
                            {t("Appear, dry there darkness they're seas, dry waters")}.
                        </p>
                    </div>
                </div>
                <div className="row mx-n1 mb-10">
                    <BrandsComp
                        img="/img/products/product-16.jpg"
                    />
                    <BrandsComp
                        img="/img/products/product-16.jpg"
                    />
                    <BrandsComp
                        img="/img/products/product-16.jpg"
                    />
                    <BrandsComp
                        img="/img/products/product-16.jpg"
                    />
                    <BrandsComp
                        img="/img/products/product-16.jpg"
                    />
                    <BrandsComp
                        img="/img/products/product-16.jpg"
                    />
                </div>
                <div className="row">
                    <div className="col-4 col-sm-3 col-md text-center">
                        {/* Brand */}
                        <img src="/img/brands/gray-350/mango.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                    </div>
                    <div className="col-4 col-sm-3 col-md text-center">
                        {/* Brand */}
                        <img src="/img/brands/gray-350/zara.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                    </div>
                    <div className="col-4 col-sm-3 col-md text-center">
                        {/* Brand */}
                        <img src="/img/brands/gray-350/reebok.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                    </div>
                    <div className="col-4 col-sm-3 col-md text-center">
                        {/* Brand */}
                        <img src="/img/brands/gray-350/asos.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                    </div>
                    <div className="col-4 col-sm-3 col-md text-center">
                        {/* Brand */}
                        <img src="/img/brands/gray-350/stradivarius.svg" alt="..." className="img-fluid mb-6 mb-sm-0" />
                    </div>
                    <div className="col-4 col-sm-3 col-md text-center">
                        {/* Brand */}
                        <img src="/img/brands/gray-350/adidas.svg" alt="..." className="img-fluid mb-6 mb-sm-0" />
                    </div>
                    <div className="col-4 col-sm-3 col-md text-center">
                        {/* Brand */}
                        <img src="/img/brands/gray-350/bershka.svg" alt="..." className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}
