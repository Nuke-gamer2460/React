// Reducer
// Reducer
function cartReducer(state, action) {
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }
    //difines actions(add and delete)
    switch (action.type) {
        case "addProduct":
            return {
                ...state,
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case "deleteProduct":
            //identify product by name
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                ...state,
                //updates total cost
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }
        default:
            return state;
    }
}
export default cartReducer;