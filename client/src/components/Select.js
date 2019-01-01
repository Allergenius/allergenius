import React from 'react';
//import PropTypes from 'prop-types';

const Select = ({ name, selectedOption, controlFunc, placeholder, options}) => (
	<div className="form-group">
		{console.log(selectedOption)}
		<select
			name={name}
			value={selectedOption}
			onChange={controlFunc}
			className="form-select">
			<option value="">{placeholder}</option>
			{options.map((opt) => {
				return (
					<option
						key={opt}
						value={opt}>
						{opt}
					</option>
				);
			})}
		</select>
	</div>
);

export default Select;