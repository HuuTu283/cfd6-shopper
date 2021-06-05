import { useTranslate } from "../../../core/Translate";



export default function CategoriesComp({ img, heading, button }) {
    let { t } = useTranslate();
    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-1.jpg)' }}>
            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: '470px' }}>
                <div className="card-body mt-auto mb-n11 py-8">
                    {/* Heading */}
                    <h1 className="mb-0 font-weight-bolder">
                        {t(heading)}
                    </h1>
                </div>
                <div className="card-body mt-auto py-8">
                    {/* Button */}
                    <a className="btn btn-white stretched-link" href="shop.html">
                        {t(button)} <i className="fe fe-arrow-right ml-2" />
                    </a>
                </div>
            </div>
        </div>
    )
}
