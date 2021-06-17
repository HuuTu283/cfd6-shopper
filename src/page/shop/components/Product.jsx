
import { Link } from 'react-router-dom';
import { currency } from 'utils';

import { Skeleton } from '@material-ui/lab';

export default function Product({ badges, name, rating_average, thumbnail_url, slug, price, real_price, discount_rate, loading }) {
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
                    <Link className="card-img-hover" to={`/cua-hang/${slug}`}>
                        {
                            loading ? <Skeleton variant="rect" width="100%" height={250} /> : <>
                                <img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
                                <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
                            </>


                        }

                    </Link>
                    {
                        discount_rate > 0 ? <p className="discount_rate">{discount_rate}%</p> : null
                    }

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

                    {
                        loading ? <Skeleton variant="rect" height={60} /> : <>
                            <div className="font-size-xs product-rating" >

                                <span>{rating_average} ⭐</span>
                            </div>

                            {/* Title */}
                            <div className="font-weight-bold">
                                <Link className="text-body" to={`/cua-hang/${slug}`}>
                                    {name}
                                </Link>
                            </div>
                        </>


                    }


                    {/* Price */}

                    {
                        loading ? <Skeleton /> : <>
                            <div className="font-weight-bold">
                                <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(price)}</span>
                                <span className="text-primary">{currency(real_price)}</span>
                            </div>
                        </>


                    }


                </div>
            </div>
        </div>
    )
}
