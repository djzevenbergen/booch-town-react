import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <div id="keg-l" className="keg-list">

        {Object.values(props.kegList).map((keg) =>
          <Keg
            whenKegClicked={props.onKegSelection}
            onClickingEditCapacity={props.onClickingEditCapacity}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            flavor={keg.flavor}
            capacity={keg.capacity}
            howMuchLeft={keg.howMuchLeft}
            id={keg.id}
            key={keg.id} />
        )
        }

      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingEditCapacity: PropTypes.func
};

export default KegList;