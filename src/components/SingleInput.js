import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<input
			type={props.inputType}
			className="form-input"
			name={props.name}
			onChange={props.controlFunc}
			value={props.content}
			placeholder={props.placeholder} />
	</div>
);

SingleInput.propTypes = {
	inputType: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   controlFunc: PropTypes.func.isRequired,
   content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
   ]).isRequired,
   placeholder: PropTypes.string, 
};

export default SingleInput;