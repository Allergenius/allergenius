import React from 'react';

const Range = (props) => (

<div className="customRange">
	<label className="customRange">{props.title}</label>
		<div className="custom-range" min="0" max="5" step="0.5">
			<input
				className="custom-range"
                // name={props.setname}
                min="0"
                max="5"
                step="1"
                onChange={props.controlFunc}
				type={props.type} />
		</div>
	</div>
);

export default Range;