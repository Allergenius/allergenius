import React from 'react';

const Checkbox = (props) => (
	<div>
		<label className="checkbox-Q-label">{props.title}</label>
		<div className="form-check">
			{props.options.map(option => {
				return (
					<label key={option} className="form-checkbox-label">
						<input
							className="form-check-input"
							setname={props.setname}
							onChange={props.controlFunc}
							value={option} 
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} 
							/> {option}
					</label> 
				);
			})}
		</div>
	</div>
);

export default Checkbox;
