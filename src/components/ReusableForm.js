import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Kombucha Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='0.00'
          step="0.01"
          min="0" />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
        <input
          type='hidden'
          name='howMuchLeft'
          value='Plenty-o-Booch' />
        <input
          type='hidden'
          name='capacity'
          value='124' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment >
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;