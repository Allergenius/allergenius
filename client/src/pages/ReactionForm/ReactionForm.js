import React, {Component} from 'react';
// import DatePicker from "react-datepicker";
import Checkbox from '../../components/FormElements/Checkbox';
import RadioBtn2 from '../../components/FormElements/RadioBtn2options';
import RadioBtn5 from '../../components/FormElements/RadioBtn5options';
import Input from '../../components/FormElements/Input';
import TextArea from '../../components/FormElements/TextArea';
import Container from "../../components/Container/Container";
import Warning from "../../components/Warning/Warning";
import BackButton from "../../components/Buttons/BackButton";
import "react-datepicker/dist/react-datepicker.css";
import jwt_decode from 'jwt-decode';
// import { format } from 'util';
import "react-widgets/dist/css/react-widgets.css";
import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import './ReactionForm.css'

moment.locale('en')
momentLocalizer()

// let formatter = moment.format()


class ReactionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			startDate: new Date(),
			endDate: new Date(),
			symptomOptions: [],
			currentSymptoms: [],
			severity: [],
			currentSeverity: 0,
			sick: [],
			currentSickStatus: [],
			foodOptions: [],
			currentFoodsEaten: [],
			reactionNotes: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleSymptomSelect = this.handleSymptomSelect.bind(this);
		this.handleSeveritySelect = this.handleSeveritySelect.bind(this);
		this.handleSickSelect = this.handleSickSelect.bind(this);
		this.handleFoodSelect = this.handleFoodSelect.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);
	}

	// componentWillMount = () => {
    //     // new
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     console.log(decoded)
    //     this.setState({
    //         first_name: decoded.first_name,
    //         last_name: decoded.last_name,
    //         email: decoded.email,
    //         id: decoded.id
    //     })
	// }
	
	componentDidMount() {
		document.body.className="body-non-landing"
		fetch('./reaction-entry.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					symptomOptions: data.symptomOptions,
					currentSymptoms: data.currentSymptoms,
					severity: data.severity,
					currentSeverity: data.currentSeverity,
					sick: data.sick,
					currentSickStatus: data.currentSickStatus,
					foodOptions: data.foodOptions,
					currentFoodsEaten: data.currentFoodsEaten,
					reactionNotes: data.reactionNotes
				});
				const token = localStorage.usertoken
				const decoded = jwt_decode(token)
				this.setState({
					// first_name: decoded.first_name,
					// last_name: decoded.last_name,
					email: decoded.email,
					id: decoded.id
				})
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
	
	handleSymptomSelect = event => {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.currentSymptoms.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentSymptoms.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentSymptoms, newSelection];
		}
		this.setState({ currentSymptoms: newSelectionArray }, () => console.log('symptom selection', this.state.currentSymptoms));
	}
	
	// Function for RadioBtn5 Buttons for Severity
	handleSeveritySelect = event => {
		const newSelection = event.target.value;
		this.setState({ currentSeverity: newSelection }, () => console.log('severity selection', this.state.currentSeverity));
	}

	// Function for RadioBtn2 Buttons for Sick Status
	handleSickSelect = event => {
		const newSelection = event.target.value;
		this.setState({ currentSickStatus: newSelection }, () => console.log('sick selection', this.state.currentSickStatus));
	}

	// Function for Checkboxes for Foods Eaten
	handleFoodSelect = event => {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.currentFoodsEaten.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentFoodsEaten.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentFoodsEaten, newSelection];
		}
		this.setState({ currentFoodsEaten: newSelectionArray }, () => console.log('food selection', this.state.currentFoodsEaten));
	}

	// Function for Single-line Text Inputs
	handleSelect = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}

	// Function for Multi-line Textarea Inputs for Notes section
	handleNoteChange(event) {
		this.setState({ reactionNotes: event.target.value }, () => console.log('reactionNotes', this.state.reactionNotes));
	}
	
	// Function for Datepicker Start Date/Time
	handleChangeStart(date) {
		this.setState({
		  startDate: date,
		});
	}

	// Function for Datepicker End Date/Time
	handleChangeEnd(date) {
		this.setState({
		  endDate: date,
		});
	}

	// Function for Submit Button
	handleFormSubmit(event) {
		event.preventDefault();

		const formPayload = {
			title: this.state.title,
			startDate: this.state.startDate,
			endDate: this.state.endDate,
			currentSymptoms: this.state.currentSymptoms,
			currentSeverity: this.state.currentSeverity,
			currentSickStatus: this.state.currentSickStatus,
			currentFoodsEaten: this.state.currentFoodsEaten,
			reactionNotes: this.state.reactionNotes,
			id: this.state.id
		};
		console.log('Send this in a POST request:', formPayload);

		let username = this.state.id; //user unique id

		fetch("/api/reactions/" + username, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formPayload)
        }).then(function(response) {
			console.log(response)
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
			window.location.href = "/home";
        }).catch(function(err) {
            console.log(err)
        });
	}

	// Render on page
	render() {
		const { 
			title,
			symptomOptions, 
			currentSymptoms, 
			severity, 
			currentSeverity, 
			sick, 
			currentSickStatus, 
			foodOptions, 
			currentFoodsEaten,
			reactionNotes
		} = this.state;
		
		return (
			<div className='form-container'>
				<Container>
				<Warning />
					<form className="container form-group needs-validation novalidate p-5 border border-secondary bg-light" onSubmit={this.handleFormSubmit} method="POST">
						<BackButton clickBack={this.clickBack} />
						
						<h3 className="text-center p-4 header-1">Reaction Entry Form</h3>
						
						<div className="form-group mt-4 mb-6 p-1">
							<label htmlFor="reaction-title" className="title-label mr-2 mb-3">
								Reaction title (for your own reference):
							</label>
							<Input
								inputType={'text'}
								className="reaction-title"
								name={'title'}
								controlFunc={this.handleSelect}
								content={title}
								placeholder={'Example: Nausea after Friday work lunch'}
								
							/>
						</div>

						<div className="form-group mt-4 mb-6 p-1">			
							<label htmlFor="reaction-start-date" className="calendar-label mr-2 mb-3">
								Reaction Start Time:
							</label>
							<DateTimePicker
								currentDate={this.state.startDate}
								onChange={startDate => this.setState({ startDate })}
								date={true}
								format='LLL'
								defaultValue={new Date()}
								time={true}
								value={this.state.startDate}
								onCurrentDateChange={startDate => this.setState({ startDate })}
								max={new Date()}
								parse='LLL'
							/>    
						</div>
						
						<div className="form-group mt-4 mb-6 p-1">
							<label htmlFor="reaction-end-date" className="calendar-label mr-2 mb-3">
								Reaction End Time:
							</label>
							<DateTimePicker
								currentDate={this.state.endDate}
								max={new Date()}
								onChange={this.handleChangeEnd}
								date={true}
								format='LLL'
								time={true}
								value={this.state.endDate}
								onCurrentDateChange={this.handleChangeEnd} 
							/>
						</div>
						
						<div className="form-group mt-4 mb-6 p-1">
							<label>
								Are you currently experiencing any of these symptoms?
							</label>
							<Checkbox
								setname={'symptoms'}
								type={'checkbox'}
								className="reaction-symptom-checkboxes"
								controlFunc={this.handleSymptomSelect}
								options={symptomOptions}
								selectedOptions={currentSymptoms} 
							/>
						</div>
						
						<div className="form-group mt-4 mb-6 p-1">
							<label htmlFor="reaction-severity-radios">
								Reaction Severity (on a scale of 1 to 5 where 1 = minor and 5 = extreme):
							</label>
							<RadioBtn5
								setName={'severity'}
								type={'radio'}
								controlFunc={this.handleSeveritySelect}
								className="reaction-severity-radios"
								options={severity}
								selectedOptions={currentSeverity} 
							/>
						</div>
						
						<div className="form-group mt-4 mb-6 p-1">
							<label htmlFor="reaction-sick-radios" className="sick-radios">
								Are you currently sick with a cold or the flu?
							</label>
							<RadioBtn2
								setname={'sick'}
								type={'radio'}
								controlFunc={this.handleSickSelect}
								className="reaction-sick-radios"
								options={sick}
								selectedOptions={currentSickStatus} 
							/>	
						</div>
						
						<div className="form-group mt-4 mb-6 p-1">
							<label htmlFor="reaction-food-checkboxes" className="checkbox-Q-label mb-2">
								Have you ingested any of these foods today?
							</label>
							<Checkbox
								setname={'foodOptions'}
								type={'checkbox'}
								controlFunc={this.handleFoodSelect}
								className="reaction-food-checkboxes"
								options={foodOptions}
								selectedOptions={currentFoodsEaten} 
							/>
						</div>
						
						<div className="form-group mt-4 mb-6 p-1">
							<label htmlFor="notes-textarea" className="notes-label mr-2 mb-3">
								Reaction Notes: 
							</label>
							<TextArea
								rows={4}
								resize={false}
								className="form-control notes-textarea"
								content={reactionNotes}
								name={'reactionNotes'}
								controlFunc={this.handleNoteChange}
								placeholder={'Add any additional notes that may help your doctor later.'} 
							/>
						</div>
						
						<div className="button-div">
							<input
								type="submit"
								className="btn btn-secondary btn-lg btn-submit"
								value="Submit"
							/>
						</div>
					</form>
				</Container>
			</div>
		);
	}
}

export default ReactionForm;