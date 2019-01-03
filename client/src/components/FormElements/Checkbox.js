import React from 'react';

const Checkbox = (props) => (
	<div>
		<label className="form-label">{props.title}</label>
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-label capitalize">
						<input
<<<<<<< HEAD:client/src/components/FormElements/Checkbox.js
							className="form-checkbox"
							setName={props.setName}
=======
							className="form-checkbox capitalize"
							name={props.setName}
>>>>>>> 8f64eb509ed4dc84fdd6bf07dcd35f770d4fdff3:client/src/components/Checkbox.js
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