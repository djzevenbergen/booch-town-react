import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Details</h1>
      <h3>Name: {keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: {keg.price}</p>
      <p>Flavor: {keg.flavor}</p>
      <p>Capacity: {keg.capacity}</p>
      <p>{keg.howMuchLeft} left</p>
      <button onClick={props.onClickingEdit}>Update Entry</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Entry</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;