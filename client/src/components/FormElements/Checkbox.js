import React from 'react';

const Checkbox = (props) => (
	<div>
		<label className="form-label">{props.title}</label>
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-label capitalize">
						<input
							className="form-checkbox"
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

export default Checkbox;
