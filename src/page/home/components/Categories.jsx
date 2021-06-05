
import { useTranslate } from '../../../core/Translate';
import CategoriesComp from './CategoriesComp';


export default function Categories() {
    let { t } = useTranslate();
    return (
        <section>
            <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">
                {/* Item */}
                <CategoriesComp
                    img=""
                    heading="Women"
                    button="Shop Women"
                />

                {/* Card */}
                <CategoriesComp
                    img=""
                    heading="Men"
                    button="Shop Men"
                />


                {/* Card */}
                <CategoriesComp
                    img=""
                    heading="Kids"
                    button="Shop Kids"
                />


            </div>
        </section>
    )
}
