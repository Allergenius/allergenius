import React, {Component} from 'react';
import Checkbox from '../components/Checkbox';
// import Input from '../components/Input';
import SingleInput from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDateTime: '',
			symptomOptions: [],
			currentSymptoms: [],
			severity: [],
			currentSeverity: '',
			sick: [],
			currentSickStatus: '',
			foodOptions: [],
			currentFoodsEaten: [],
			symptomTime: '',
			reactionNotes: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleSymptomSelect = this.handleSymptomSelect.bind(this);
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
	}
	render() {
		//const componentOptions = { Input, Checkbox, Select, TextArea };
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
			<div>
				<h3>This app is not intended to replace medical care. If you are having an emergency, dial 911!</h3>
				<form className="container-fluid" onSubmit={this.handleFormSubmit}>
					<h4 className="text-center p-4">Reaction Entry Form</h4>
					<SingleInput
						inputType={'text'}
						title={'Current date and time:  '}
						name={'dateAndTime'}
						controlFunc={this.handleSelect}
						content={dateAndTime}
						placeholder={'Type current date and time here'} />
					<Checkbox
						title={'Are you currently experiencing any of these symptoms?'}
						setName={'symptoms'}
						type={'checkbox'}
						controlFunc={this.handleSymptomSelect}
						options={symptomOptions}
						selectedOptions={currentSymptoms} />
					<Select
						name={'currentSeverity'}
						title={'Reaction severity'}
						placeholder={'Reaction Severity - on a scale of 1-5 (1 is minor and 5 is extreme)'}
						controlFunc={this.handleSelect}
						options={severity}
						selectedOption={currentSeverity} />
					<Select
						name={'sick'}
						title={'Are you currently sick with a cold or the flu?'}
						placeholder={'Are you currently sick?'}
						controlFunc={this.handleSelect}
						options={sick}
						selectedOption={currentSickStatus} />
					<Checkbox
						title={'Have you ingested any of these foods today?'}
						setName={'foods'}
						type={'checkbox'}
						controlFunc={this.handleFoodSelect}
						options={foodOptions}
						selectedOptions={currentFoodsEaten} />
					<TextArea
						title={'How long have your current symptoms been going on?'}
						rows={1}
						resize={false}
						content={symptomTime}
						name={'symptomTime'}
						controlFunc={this.handleSymptomTimeChange}
						placeholder={'Example: 2 hours'} />
					<TextArea
						title={'Additional Notes:'}
						className={'mt-5'}
						rows={5}
						resize={false}
						content={reactionNotes}
						name={'reactionNotes'}
						controlFunc={this.handleNoteChange}
						placeholder={'Please be thorough in your notes'} />
					<input
						type="submit"
						className="btn btn-primary float-right"
						value="Submit"/>
				</form>
			</div>
		);
	}
}

export default FormContainer;