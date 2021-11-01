import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoading } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../Components/spinner/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoading(state),
});

export const CollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionsContainer;
