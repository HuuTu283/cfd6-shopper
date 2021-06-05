

export default function Product({ badges, name, categories, thumbnail_url, slug, price, real_price }) {
    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                    {badges?.text}
                </div>
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <a className="card-img-hover" href={slug}>
                        <img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
                        <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
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
                        <a className="text-muted" href={slug}>{categories}</a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <a className="text-body" href={slug}>
                            {name}
                        </a>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">{price}đ</span>
                        <span className="text-primary">{real_price}đ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
