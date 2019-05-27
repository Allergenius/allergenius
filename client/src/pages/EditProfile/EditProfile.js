import React, {Component} from 'react';
import axios from 'axios';
import Checkbox from '../../components/FormElements/Checkbox';
import Input from '../../components/FormElements/Input';
import Container from "../../components/Container/Container";
import Warning from "../../components/Warning/Warning";
import ProfileSubmit from "../../components/Buttons/ProfileSubmitButton";
import BackButton from "../../components/Buttons/BackButton";
import jwt_decode from 'jwt-decode';


class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '', 
			lastName: '',
			id: '',
			foodAllergens: [],
			foodsAllergicTo: [],
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFoodSelect = this.handleFoodSelect.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentDidMount() {
		document.body.className="body-non-landing"
		fetch('./profile-setup.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					foodAllergens: data.foodAllergens,
				});
				
			});
		this.getData();
	}

	componentWillMount = () => {
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		this.setState({
			// first_name: decoded.first_name,
			// last_name: decoded.last_name,
			email: decoded.email,
			id: decoded.id
		})
	}

	getData() {
		var username = this.state.id

		axios.get("/api/profile/" + username)
		.then(res => {
			const profile = res.data[0];
			console.log("profile " + profile.first_name)
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
				firstName: profile.first_name, 
				lastName: profile.last_name,
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

		var username = this.state.id; 

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
			<div className="profile-container">
				<Container>
				<Warning />
						<form className="form-group border border-secondary bg-light" onSubmit={this.handleFormSubmit} method="POST">
						<BackButton clickBack={this.clickBack}/>
							<h3 className="text-center p-4 header-1">Edit Profile</h3>
							
							<div className="name-lines">
							<label htmlFor="firstName">First Name</label>
								<Input
									inputType={'text'}
									name={'firstName'}
									controlFunc={this.handleSelect}
									content={firstName}
									placeholder={'First Name'} />
								<label htmlFor="lastName">Last Name</label>
								<Input
									inputType={'text'}
									name={'lastName'}
									controlFunc={this.handleSelect}
									content={lastName}
									placeholder={'Last Name'} />
							</div>

							<label>Are you allergic to any of these foods?</label>	
							<Checkbox
								setname={'foodAllergens'}
								type={'checkbox'}
								controlFunc={this.handleFoodSelect}
								options={foodAllergens}
								selectedOptions={foodsAllergicTo} />
							
							<div className="button-div">
								<ProfileSubmit />
							</div>
						</form>
            </Container>
			</div>
		)
	}
}

export default EditProfile;