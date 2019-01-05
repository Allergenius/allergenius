import React, {Component} from 'react';
import Checkbox from '../../components/FormElements/Checkbox';

import Input from '../../components/FormElements/Input';


class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			foodsAllergens: [],
			foodsAllergicTo: [],
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFoodSelect = this.handleFoodSelect.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentDidMount() {
		fetch('./reaction-entry.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					firstName: data.firstName,
					lastName: data.lastName,
					foodsAllergens: data.foodsAllergens,
					foodsAllergicTo: data.foodsAllergicTo,
				});
			});

		this.getData();
	}
  getData() {
	fetch("/api/profile/" + username, {
		method: 'GET'
	  })
      .then(res => {
		const tableData = res.data.value;
		//TODO: set the state of the fields here
        this.setState({ tableData });
      })
      .catch(error => {
        if (error.response) {
          alert('Code: ' + error.response.data.error.code + 
                '\r\nMessage: ' + error.response.data.error.message);
        } else {
          console.log('Error', error.message);
        }
      });
  }

	handleFoodSelect(event) {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.foodsAllergicTo.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.foodsAllergicTo.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.foodsAllergicTo, newSelection];
		}
		this.setState({ foodsAllergicTo: newSelectionArray }, () => console.log('food allergens', this.state.foodsAllergicTo));
	}
	handleSelect = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}
	handleSelect = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}
	handleFormSubmit(event) {
		event.preventDefault();

		const formPayload = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			foodsAllergicTo: this.state.foodsAllergicTo,
		};

		console.log('Send this in a POST request:', formPayload);

		var username = "testUser"; //placeholder.  Need to figure out how to see who is logged in.

		//TODO: find out if we are adding a new profile or editing an existing one
		fetch("/api/profile/" + username, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formPayload)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).catch(function(err) {
            console.log(err)
        });
	}
	render() {
		// const componentOptions = { Input, Checkbox };
		const { 
			firstName, 
			lastName,
			foodsAllergens, 
			foodsAllergicTo,
		} = this.state;
		
		return (
			<div>
				<h3>This app is not intended to replace medical care. If you are having an emergency, dial 911!</h3>
				<form className="container-fluid" onSubmit={this.handleFormSubmit}>
					<h4 className="text-center p-4">Reaction Entry Form</h4>
					<h6>First Name:</h6>
					<Input
						inputType={'text'}
						name={'firstName'}
						controlFunc={this.handleSelect}
						content={firstName}
						placeholder={'Example: Annie'} />
					
					<h6>Last Name:</h6>
					<Input
						inputType={'text'}
						name={'lastName'}
						controlFunc={this.handleSelect}
						content={lastName}
						placeholder={'Example: Body'} />

					<h6>Are you allergic to any of these foods?</h6>	
					<Checkbox
						setname={'foodAllergens'}
						type={'checkbox'}
						controlFunc={this.handleFoodSelect}
						options={foodsAllergens}
						selectedOptions={foodsAllergicTo} />
					
					<input
						type="submit"
						className="btn btn-primary float-right mt-4"
						value="Submit"/>
				</form>
			</div>
		);
	}
}

export default EditProfile;