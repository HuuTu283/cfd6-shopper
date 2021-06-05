import { useTranslate } from "../../../core/Translate";



export default function BrandsComp({ img }) {
    let { t } = useTranslate();
    return (
        <div className="col-6 col-sm-4 col-md px-1">
            {/* Card */}
            <div className="card mb-2">
                {/* Image */}
                <img src={img} alt="..." className="card-img" />
                {/* Overlay */}
                <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                    <p className="my-0 font-size-xxs text-center text-white">
                        <i className="fe fe-heart mr-2" /> 248 <i className="fe fe-message-square mr-2 ml-3" /> 7
                    </p>
                </a>
            </div>
        </div>
    )
}
