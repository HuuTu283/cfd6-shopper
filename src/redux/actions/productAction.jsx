import ProductApi from "service/productApi";
import { PRODUCT, CATEGORY } from "../type";

export function getProduct(url) {

    return async (dispatch) => {
        let res = await ProductApi.product(url)
        if (res) {
            dispatch({
                type: PRODUCT,
                payload: res,
            });
        }
    };

}

export function getCategory() {

    return async (dispatch, state) => {
        if (state.productReducer.loadingCategories) {
            let category = await ProductApi.category()
            if (category) {
                dispatch({
                    type: CATEGORY,
                    payload: category,
                });
            }
        }

    };

}

