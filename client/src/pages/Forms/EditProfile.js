import React, {Component} from 'react';
import Checkbox from '../../components/FormElements/Checkbox';
import Input from '../../components/FormElements/Input';
import Warning from "../../components/Warning/Warning"

class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '', 
			lastName: '',
			foodAllergens: [],
			foodsAllergicTo: [],
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFoodSelect = this.handleFoodSelect.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentDidMount() {
		document.body.className="body-non-login"
		fetch('./profile-setup.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					foodAllergens: data.foodAllergens,
				});
			});

		//this.getData();
	}
  getData() {
	var username = "testUser"
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
            window.location.href = "/home";
        }).catch(function(err) {
            console.log(err)
        });
	}
	render() {
		const { 
			firstName, 
			lastName,
			foodAllergens, 
			foodsAllergicTo,
		} = this.state;
		
		return (
			<div>
				<form onSubmit={this.handleFormSubmit} method="POST">
					<h3 className="text-center p-4">
						Edit Profile
					</h3>
					
					<div className="form-group">
						<label for="input-first-name">
							First Name:
						</label>
						<Input
							inputType={'text'}
							name={'firstName'}
							className="input-first-name"
							controlFunc={this.handleSelect}
							content={firstName}
							placeholder={'Example: Annie'} 
						/>
					</div>
					<div className="form-group">
						<label for="input-last-name">
							Last Name:
						</label>
						<Input
							inputType={'text'}
							name={'lastName'}
							className="input-last-name"
							controlFunc={this.handleSelect}
							content={lastName}
							placeholder={'Example: Body'} 
						/>
					</div>
					<div className="form-group">
						<label for="checkbox-allergens">
							Are you allergic to any of these foods?
						</label>	
						<Checkbox
							setname={'foodAllergens'}
							type={'checkbox'}
							className="checkbox-allergens"
							controlFunc={this.handleFoodSelect}
							options={foodAllergens}
							selectedOptions={foodsAllergicTo} 
						/>
					</div>
					<div className="form-group">
						<a href="/home">
							<input 
								type={'submit'}
								value={'Submit'}
								className="btn btn-submit"	
							/>
						</a>
					</div>
				</form>
				<Warning />
			</div>
		)
	}
}

export default EditProfile;