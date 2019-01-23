import React from 'react';

const RadioBtn2 = (props) => (
	<div>
		<h6 className="radio-Q-label">{props.title}</h6>
		<div className="form-check-2">
			{props.options.map(option => {
				return (
					<label key={option} className="form-check-label mr-4">
						<input
							className="form-check-input"
							setname={props.setname}
							onChange={props.controlFunc}
							value={option} 
							autoComplete="off"
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} 
							required
							/> {option}
					</label>
				);
			})}
		</div>
	</div>
);

export default RadioBtn2;
