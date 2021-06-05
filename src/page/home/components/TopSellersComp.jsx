import React from 'react'
import { useTranslate } from '../../../core/Translate';


export default function TopSellersComp({ badge, category, title, price }) {
    let { t } = useTranslate();

    return (
        <div className="col-6 col-md-4 col-lg-3">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}

                {
                    badge === 'new' ? <div className="badge badge-white card-badge card-badge-left text-uppercase">
                        {t("New")}
                    </div>
                        :
                        (badge === 'sale' ?
                            <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                                {t("Sale")}
                            </div>
                            :
                            ''
                        )
                }

                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <a className="card-img-hover" href="product.html">
                        <img className="card-img-top card-img-back" src="/img/products/product-120.jpg" alt="..." />
                        <img className="card-img-top card-img-front" src="/img/products/product-5.jpg" alt="..." />
                    </a>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">{t(category)}</a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <a className="text-body" href="product.html">
                            {t(title)}
                        </a>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">
                        {t(price)}
                    </div>
                </div>
            </div>
        </div>
    )
}
