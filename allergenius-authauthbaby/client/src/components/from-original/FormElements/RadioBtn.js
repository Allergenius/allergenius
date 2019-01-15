import React from 'react';

const Radio = (props) => (
	<div>
		<label className="form-label">{props.title}</label>
		<div className="radio-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-label capitalize">
						<input
							className="form-radio"
							setname={props.setname}
							onChange={props.controlFunc}
							value={option} 
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

export default Radio;
