import { connect } from "react-redux";
import Cart from "./Cart";

//keeps tarck of the application state
function mapStateToProps(state) {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart
  }
}

//calls action methodes ( updates the state)
function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: (productName, productPrice) => dispatch({
      type: "addProduct",
      productData: {
        productName: productName,
        productPrice: productPrice
      }
    }),
    onDeleteProduct: (productData) => dispatch({
      type: "deleteProduct",
      productData: productData
    })
  }
}

//connects the component to the store
let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default connectedComponent;