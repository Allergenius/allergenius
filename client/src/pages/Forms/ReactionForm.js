import React, {Component} from 'react';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Range from '../../components/Range';

class ReactionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDateTime: '',
			symptomOptions: [],
			currentSymptoms: [],
			severity: [],
			currentSeverity: [],
			sick: [],
			currentSickStatus: [],
			foodOptions: [],
			currentFoodsEaten: [],
			symptomTime: '',
			reactionNotes: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleSymptomSelect = this.handleSymptomSelect.bind(this);
		this.handleSeveritySelect = this.handleSeveritySelect.bind(this);
		this.handleSickSelect = this.handleSickSelect.bind(this);
		this.handleFoodSelect = this.handleFoodSelect.bind(this);
		this.handleSymptomTimeChange = this.handleSymptomTimeChange.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);
	}
	componentDidMount() {
		fetch('./reaction-entry.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					currentDateTime: data.currentDateTime,
					symptomOptions: data.symptomOptions,
					currentSymptoms: data.currentSymptoms,
					severity: data.severity,
					currentSeverity: data.currentSeverity,
					sick: data.sick,
					currentSickStatus: data.currentSickStatus,
					foodOptions: data.foodOptions,
					currentFoodsEaten: data.currentFoodsEaten,
					symptomTime: data.symptomTime,
					reactionNotes: data.reactionNotes
				});
			});
	}
	handleSymptomSelect(event) {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.currentSymptoms.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentSymptoms.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentSymptoms, newSelection];
		}
		this.setState({ currentSymptoms: newSelectionArray }, () => console.log('symptom selection', this.state.currentSymptoms));
	}
	handleSeveritySelect(event) {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.currentSeverity.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentSeverity.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentSeverity, newSelection];
		}
		this.setState({ currentSeverity: newSelectionArray }, () => console.log('severity selection', this.state.currentSeverity));
	}
	handleSickSelect(event) {
		const newSelection = event.target.value;
		let newSelectionArray;
		if(this.state.currentSickStatus.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentSickStatus.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentSickStatus, newSelection];
		}
		this.setState({ currentSickStatus: newSelectionArray }, () => console.log('sick selection', this.state.currentSickStatus));
	}
	handleFoodSelect(event) {
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
		// console.log(name)
		// console.log(value)
		this.setState({ [name]: value });
	}
	handleSymptomTimeChange(event) {
		// const textArray = event.target.value.split('').filter(x => x !== 'event');
		// console.log('string split into array of letters',textArray);
		// const filteredText = textArray.join('');
		// this.setState({ symptomTime: filteredText }, () => console.log('symptomTime', this.state.symptomTime));
		this.setState({ symptomTime: event.target.value }, () => console.log('symptomTime', this.state.symptomTime));
	}
	handleNoteChange(event) {
		// const textArray = event.target.value.split('').filter(x => x !== 'event');
		// console.log('string split into array of letters',textArray);
		// const filteredText = textArray.join('');
		// this.setState({ reactionNotes: filteredText }, () => console.log('reactionNotes', this.state.reactionNotes));
		this.setState({ reactionNotes: event.target.value }, () => console.log('reactionNotes', this.state.reactionNotes));
	}
	handleFormSubmit(event) {
		event.preventDefault();

		const formPayload = {
			currentDateTime: this.state.currentDateTime,
			currentSymptoms: this.state.currentSymptoms,
			currentSeverity: this.state.currentSeverity,
			currentSickStatus: this.state.currentSickStatus,
			currentFoodsEaten: this.state.currentFoodsEaten,
			symptomTime: this.state.symptomTime,
			reactionNotes: this.state.reactionNotes
		};

		console.log('Send this in a POST request:', formPayload);

		var username = "testUser"; //placeholder.  Need to figure out how to see who is logged in.

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
		//const componentOptions = { Input, Checkbox, TextArea };
		const { dateAndTime, 
			symptomOptions, 
			currentSymptoms, 
			severity, 
			currentSeverity, 
			sick, 
			currentSickStatus, 
			foodOptions, 
			currentFoodsEaten,
			symptomTime,
			reactionNotes
		} = this.state;
		
		return (
			<div className='container container-fluid'>
				<div className='lead p-3 border bg-light text-center'>This app is not intended to replace medical care. If you are having an emergency, dial 911</div>
				<form className="container form-group m-4" onSubmit={this.handleFormSubmit} method="POST">
					<h3 className="text-center p-4">Reaction Entry Form</h3>
					
					<h6>Type current date and time:</h6>
					<Input
						inputType={'text'}
						name={'dateAndTime'}
						controlFunc={this.handleSelect}
						content={dateAndTime}
						placeholder={'Example: 12/25/18 5pm'} />
					
					<h6>Are you currently experiencing any of these symptoms?</h6>
					<Checkbox
						setName={'symptoms'}
						type={'checkbox'}
						controlFunc={this.handleSymptomSelect}
						options={symptomOptions}
						selectedOptions={currentSymptoms} />
											
					<h6>Reaction Severity on a scale of 1 to 5 *TEST RANGE SLIDER*:</h6>
					<Range
						setName={'severity'}
						type={'range'}
						controlFunc={this.handleSeveritySelect}
						options={severity}
						selectedOptions={currentSeverity} />

					<h6>Are you currently sick with a cold or the flu?</h6>
					<Checkbox
						setName={'sick'}
						type={'radio'}
						controlFunc={this.handleSickSelect}
						options={sick}
						selectedOptions={currentSickStatus} />	

					<h6>Have you ingested any of these foods today?</h6>
					<Checkbox
						setName={'foods'}
						type={'checkbox'}
						controlFunc={this.handleFoodSelect}
						options={foodOptions}
						selectedOptions={currentFoodsEaten} />
					
					<h6>How long have your current symptoms been going on?</h6>
					<TextArea
						rows={1}
						resize={false}
						content={symptomTime}
						name={'symptomTime'}
						controlFunc={this.handleSymptomTimeChange}
						placeholder={'Example: 2 hours'} />
					
					<h6>Additional notes:</h6>
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