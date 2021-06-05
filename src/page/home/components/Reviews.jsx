
import { useTranslate } from '../../../core/Translate';
import ReviewsComp from './ReviewsComp';

export default function Reviews() {
    let { t } = useTranslate();
    return (
        <section className="py-12">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                        {/* Preheading */}
                        <h6 className="heading-xxs mb-3 text-gray-400">
                            {t("What buyers say")}
                        </h6>
                        {/* Heading */}
                        <h2 className="mb-10">{t("Latest buyers Reviews")}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Slider */}
                        <div data-flickity="{&quot;pageDots&quot;: true}">
                            <ReviewsComp
                                preheading="Shoes"
                                heading="Low top Sneakers"
                                blockquote="God every fill great replenish darkness unto. Very open. Likeness their that light. Given under
                                    image to. Subdue of shall cattle day fish form saw spirit and given stars."
                                name=" Logan Edwards"
                                date="01 Jun 2019"
                                stars="3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
