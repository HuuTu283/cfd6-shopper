import { Link, NavLink } from 'react-router-dom';
import { useTranslate } from '../../../core/Translate';

import TopSellersComp from './TopSellersComp';


export default function TopSellers() {
    let { t } = useTranslate();
    return (
        <section className="py-12">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        {/* Heading */}
                        <h2 className="mb-4 text-center">{t("Top month Sellers")}</h2>
                        {/* Nav */}
                        <div className="nav justify-content-center mb-10">
                            <Link className="nav-link" to="#topSellersTab active" data-toggle="tab">{t("Women")}</Link>
                            <Link className="nav-link" to="#topSellersTab" data-toggle="tab">{t("Men")}</Link>
                            <Link className="nav-link" to="#topSellersTab" data-toggle="tab">{t("Kids")}</Link>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="topSellersTab">
                        <div className="row">
                            <TopSellersComp
                                badge="new"
                                category="Shoes"
                                title="Leather mid-heel Sandals"
                                price="$129.00"
                            />
                            <TopSellersComp
                                badge="sale"
                                category="Dresses"
                                title="Cotton floral print Dress"
                                price="$40.00"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Link  */}
                        <div className="mt-7 text-center">
                            <a className="link-underline" href="#!">{t("Discover more")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
