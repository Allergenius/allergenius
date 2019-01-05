import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from '../../components/FormElements/Checkbox';
import Radio from '../../components/FormElements/RadioBtn';
import Input from '../../components/FormElements/Input';
import TextArea from '../../components/FormElements/TextArea';

class ReactionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			startDate: new Date(),
			endDate: new Date(),
			symptomOptions: [],
			currentSymptoms: [],
			severity: [],
			currentSeverity: '',
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
	componentDidMount() {
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
			});
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
	handleSeveritySelect = event => {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.currentSeverity.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentSeverity.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentSeverity, newSelection];
		}
		this.setState({ currentSeverity: newSelectionArray }, () => console.log('severity selection', this.state.currentSeverity));
	}
	handleSickSelect = event => {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.currentSickStatus.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentSickStatus.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentSickStatus, newSelection];
		}
		this.setState({ currentSickStatus: newSelectionArray }, () => console.log('sick selection', this.state.currentSickStatus));
	}
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
	handleSelect = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}
	handleNoteChange(event) {
		this.setState({ reactionNotes: event.target.value }, () => console.log('reactionNotes', this.state.reactionNotes));
	}
	handleChangeStart(date) {
		this.setState({
		  startDate: date,
		});
	}
	handleChangeEnd(date) {
		this.setState({
		  endDate: date,
		});
	}
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
			reactionNotes: this.state.reactionNotes
		};

		console.log('Send this in a POST request:', formPayload);

		let username = "testUser"; //placeholder.  Need to figure out how to see who is logged in.

		fetch("/api/reactions/" + username, {
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
			<div className='container container-fluid'>

				<div className='lead p-3 mb-2 border bg-light text-center'>This app is not intended to replace medical care. If you are having an emergency, dial 911</div>
				<form className="container form-group m-4" onSubmit={this.handleFormSubmit} method="POST">
					<h3 className="text-center p-4">Reaction Entry Form</h3>
					
					<h6 className="p-1">Title (for your own reference):</h6>
					<Input
						inputType={'text'}
						name={'title'}
						controlFunc={this.handleSelect}
						content={title}
						placeholder={'Example: Tues AM - hives and itching'} />

					<h6 className="p-1 mb-4">Start date:</h6>
					<DatePicker
						selected={this.state.startDate}
						selectsStart
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						onChange={this.handleChangeStart}
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={15}
						timeCaption="time"
						dateFormat="MMMM d, yyyy h:mm aa" 
						/>    
					
					<h6 className="p-1 mb-4">End date:</h6>
					<DatePicker
						selected={this.state.endDate}
						selectsEnd
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						onChange={this.handleChangeEnd}
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={15}
						timeCaption="time"
						dateFormat="MMMM d, yyyy h:mm aa" />

					<h6 className="p-1">Are you currently experiencing any of these symptoms?</h6>
					<Checkbox
						setname={'symptoms'}
						type={'checkbox'}
						controlFunc={this.handleSymptomSelect}
						options={symptomOptions}
						selectedOptions={currentSymptoms} />

					<h6 className="p-1">Reaction Severity (on a scale of 1 to 5):</h6>
					<Radio
						setName={'severity'}
						type={'radio'}
						controlFunc={this.handleSeveritySelect}
						options={severity}
						selectedOptions={currentSeverity} />

					<h6 className="p-1">Are you currently sick with a cold or the flu?</h6>
					<Checkbox
						setname={'sick'}
						type={'radio'}
						controlFunc={this.handleSickSelect}
						options={sick}
						selectedOptions={currentSickStatus} />	

					<h6 className="p-1">Have you ingested any of these foods today?</h6>
					<Checkbox
						setname={'foodOptions'}
						type={'checkbox'}
						controlFunc={this.handleFoodSelect}
						options={foodOptions}
						selectedOptions={currentFoodsEaten} />
					
					<h6 className="p-1">Additional notes:</h6>
					<TextArea
						className={'mt-5'}
						rows={5}
						resize={false}
						content={reactionNotes}
						name={'reactionNotes'}
						controlFunc={this.handleNoteChange}
						placeholder={'Add any additional notes that may help your doctor later.'} />
					
					<input
						type="submit"
						className="btn btn-primary"
						value="Submit"/>
				</form>
			</div>
		);
	}
}

export default ReactionForm;