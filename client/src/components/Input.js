import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<input
			type={props.inputType}
			className="form-input text-center"
			name={props.name}
			onChange={props.controlFunc}
			value={props.content}
			placeholder={props.placeholder} />
	</div>
);

export default SingleInput;