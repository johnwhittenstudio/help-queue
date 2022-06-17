import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <br/>
        <br/>
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <br/>
        <br/>
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <br/>
        <br/>
        <button className="btn shadow mr-2 updateBtn btn-outline-secondary" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;