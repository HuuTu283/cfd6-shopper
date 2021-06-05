import { useTranslate } from "../../../core/Translate";



export default function ReviewsComp({ preheading, heading, blockquote, name, date, stars }) {
    let { t } = useTranslate();
    return (
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            {/* Card */}
            <div className="card-lg card border">
                <div className="card-body">
                    {/* Header */}
                    <div className="row align-items-center mb-6">
                        <div className="col-4">
                            {/* Image */}
                            <img src="/img/products/product-13.jpg" alt="..." className="img-fluid" />
                        </div>
                        <div className="col-8 ml-n2">
                            {/* Preheading */}
                            <a className="font-size-xs text-muted" href="shop.html">
                                {t(preheading)}
                            </a>
                            {/* Heading */}
                            <a className="d-block font-weight-bold text-body" href="product.html">
                                {t(heading)}
                            </a>
                            {/* Rating */}
                            <div className="rating font-size-xxs text-warning" data-value={stars}>
                                <div className="rating-item">
                                    <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blockquote */}
                    <blockquote className="mb-0">
                        <p className="text-muted">
                            {t(blockquote)}.
                        </p>
                        <footer className="font-size-xs text-muted">
                            {t(name)}, <time dateTime="2019-06-01">{t(date)}</time>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
