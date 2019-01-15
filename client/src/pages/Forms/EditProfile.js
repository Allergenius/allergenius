import React, {Component} from 'react';
import Checkbox from '../../components/FormElements/Checkbox';
import Input from '../../components/FormElements/Input';
import axios from "axios";
import Container from "../../components/Container/Container";
import Warning from "../../components/Warning/Warning";
import Navbar from "../../components/Nav/Nav";
import ProfileSubmit from "../../components/Buttons/ProfileSubmitButton";
import BackButton from "../../components/Buttons/BackButton";


class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '', 
			lastName: '',
			foodAllergens: [],
			foodsAllergicTo: []
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

		this.getData();
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

    clickAdd = () => {
        this.props.history.push("/reactionform");
    }

    clickEditProfile = () => {
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
                <Navbar clickAdd={this.clickAdd} clickEdit={this.clickEditProfile}/>
						<form className="container form-group m-4" onSubmit={this.handleFormSubmit} method="POST">
						<BackButton clickBack={this.clickBack}/>
							<h3 className="text-center p-2">Edit Profile</h3>
							
							<h6 className="pt-2">First Name:</h6>
							<Input
								inputType={'text'}
								name={'firstName'}
								controlFunc={this.handleSelect}
								content={firstName}
								placeholder={'Example: Annie'} />
							
							<h6 className="pt-2">Last Name:</h6>
							<Input
								inputType={'text'}
								name={'lastName'}
								controlFunc={this.handleSelect}
								content={lastName}
								placeholder={'Example: Body'} />

							<h6 className="pt-2">Are you allergic to any of these foods?</h6>	
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

export default EditProfile;