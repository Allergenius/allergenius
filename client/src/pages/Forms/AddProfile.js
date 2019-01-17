import React, {Component} from 'react';
import axios from 'axios';
import Checkbox from '../../components/FormElements/Checkbox';
import Input from '../../components/FormElements/Input';
import Container from "../../components/Container/Container";
// import Navbar from "../../components/Nav/Nav";
import ProfileSubmit from "../../components/Buttons/ProfileSubmitButton";
import Warning from "../../components/Warning/Warning";
// import BackButton from "../../components/Buttons/BackButton";

class AddProfile extends Component {
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
		console.log("getData function")
		var username = "testUser"

		axios.get("/api/profile/" + username)
		.then(res => {
			const profile = res.data[0];
			console.log(profile);

			var allergies = [];

			//check all food allergies fields
			if (profile.food_Berries) allergies.push("Berries")
			if (profile.food_Celery) allergies.push("Celery")
			if (profile.food_Corn) allergies.push("Corn")
			if (profile.food_Dairy) allergies.push("Dairy")
			if (profile.food_Eggs) allergies.push("Eggs")
			if (profile.food_Fish) allergies.push("Fish/Shellfish")
			if (profile.food_TreeNuts) allergies.push("Tree Nuts")
			if (profile.food_Peanuts) allergies.push("Peanuts")
			if (profile.food_Gluten) allergies.push("Gluten")
			if (profile.food_Soybeans) allergies.push("Soybeans")
			if (profile.food_Onions) allergies.push("Onions/Garlic")
			if (profile.food_Sesame) allergies.push("Sesame")

			this.setState({
				firstName: profile.firstName, 
				lastName: profile.lastName,
				foodsAllergicTo: allergies
			});
		});
	}

	clickadd = () => {
        this.props.history.push("/reactionform");
    }

    clickeditProfile = () => {
        this.props.history.push("/editprofile");
	} 

	clickBack = () => {
        this.props.history.push("/home");
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
            method: 'PUT',
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
			<div className="">
				<Container>
				{/* <Navbar clickadd={this.clickadd} clickedit={this.clickeditProfile}/> */}
						<form className="container form-group m-4" onSubmit={this.handleFormSubmit} method="POST">
							<h3 className="text-center p-4">Add Profile Info</h3>
							
							{/* <label className="pt-2">First Name:</label> */}
							<Input
								inputType={'text'}
								name={'firstName'}
								controlFunc={this.handleSelect}
								content={firstName}
								placeholder={'First Name'} />
							
							{/* <label className="pt-2">Last Name:</label> */}
							<Input
								inputType={'text'}
								name={'lastName'}
								controlFunc={this.handleSelect}
								content={lastName}
								placeholder={'Last Name'} />

							<label className="pt-2">Are you allergic to any of these foods?</label>	
							<Checkbox
								setname={'foodAllergens'}
								type={'checkbox'}
								controlFunc={this.handleFoodSelect}
								options={foodAllergens}
								selectedOptions={foodsAllergicTo} />
							
							<ProfileSubmit />
						</form>
					<Warning />
            </Container>
			</div>
		)
	}
}

export default AddProfile;