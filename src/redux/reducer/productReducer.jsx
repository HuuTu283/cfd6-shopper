import { CATEGORY, PRODUCT } from "../type";

let initState = {
    product: [],
    category: [],
    paginate: {},
    loading: true,
    loadingCategories: true,
};

export default function productReducer(state = initState, action) {
    switch (action.type) {
        case PRODUCT:
            return {
                ...state,
                loading: false,
                product: action.payload.data,
                paginate: action.payload.paginate,

            };
        case CATEGORY:
            return {
                ...state,
                loadingCategories: false,
                category: action.payload,

            };

        default:
            return state;
    }
}
