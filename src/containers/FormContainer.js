import React, {Component} from 'react';
import Checkbox from '../components/Checkbox';
import SingleInput from '../components/SingleInput';
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
			currentSeverity: [],
			sick: [],
			currentSickStatus: [],
			foodOptions: [],
			currentFoodsEaten: [],
			symptomTime: '',
			reactionNotes: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handlecurrentDateTimeChange = this.handlecurrentDateTimeChange.bind(this);
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
	handlecurrentDateTimeChange(e) {
		this.setState({ currentDateTime: e.target.value }, () => console.log('date and time', this.state.currentDateTime));
	}
	handleSeveritySelect(e) {
		this.setState({ currentSeverity: e.target.value }, () => console.log('reaction severity', this.state.currentSeverity));
	}
	handleSymptomSelect(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if(this.state.currentSymptoms.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentSymptoms.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentSymptoms, newSelection];
		}
		this.setState({ currentSymptoms: newSelectionArray }, () => console.log('symptom selection', this.state.currentSymptoms));
	}
	handleSickSelect(e) {
		this.setState({ currentSickStatus: [e.target.value] }, () => console.log('sick status', this.state.currentSickStatus));
	}
	handleFoodSelect(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if(this.state.currentFoodsEaten.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.currentFoodsEaten.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.currentFoodsEaten, newSelection];
		}
		this.setState({ currentFoodsEaten: newSelectionArray }, () => console.log('food selection', this.state.currentFoodsEaten));
	}
	handleSymptomTimeChange(e) {
		// const textArray = e.target.value.split('').filter(x => x !== 'e');
		// console.log('string split into array of letters',textArray);
		// const filteredText = textArray.join('');
		// this.setState({ symptomTime: filteredText }, () => console.log('symptomTime', this.state.symptomTime));
		this.setState({ symptomTime: e.target.value }, () => console.log('symptomTime', this.state.symptomTime));
	}
	handleNoteChange(e) {
		// const textArray = e.target.value.split('').filter(x => x !== 'e');
		// console.log('string split into array of letters',textArray);
		// const filteredText = textArray.join('');
		// this.setState({ reactionNotes: filteredText }, () => console.log('reactionNotes', this.state.reactionNotes));
		this.setState({ reactionNotes: e.target.value }, () => console.log('reactionNotes', this.state.reactionNotes));
	}
	handleFormSubmit(e) {
		e.preventDefault();

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
		return (
			<div>
				<h3>This app is not intended to replace medical care. If you are having an emergency, dial 911!</h3>
				<form className="container" onSubmit={this.handleFormSubmit}>
					<h5>Reaction Entry Form</h5>
					<SingleInput
						inputType={'text'}
						title={'Current date and time'}
						name={'dateAndTime'}
						controlFunc={this.handlecurrentDateTimeChange}
						content={this.state.currentDateTime}
						placeholder={'Type current date and time here'} />
					<Checkbox
						title={'Are you currently experiencing any of these symptoms?'}
						setName={'symptoms'}
						type={'checkbox'}
						controlFunc={this.handleSymptomSelect}
						options={this.state.symptomOptions}
						selectedOptions={this.state.currentSymptoms} />
					<Select
						name={'severity'}
						title={'Reaction severity on a scale of 1 to 5 (where 1 is minor and 5 is extreme)'}
						placeholder={'1'}
						controlFunc={this.handleSeveritySelect}
						options={this.state.severity}
						selectedOption={this.state.currentSeverity} />
					<Select
						setName={'sick'}
						title={'Are you currently sick with a cold or the flu?'}
						placeholder={'No'}
						controlFunc={this.handleSickSelect}
						options={this.state.sick}
						selectedOption={this.state.currentSickStatus} />
					<Checkbox
						title={'Have you ingested any of these foods today?'}
						setName={'foods'}
						type={'checkbox'}
						controlFunc={this.handleFoodSelect}
						options={this.state.foodOptions}
						selectedOptions={this.state.currentFoodsEaten} />
					<TextArea
						title={'How long have your current symptoms been going on?'}
						rows={1}
						resize={false}
						content={this.state.symptomTime}
						name={'symptomTime'}
						controlFunc={this.handleSymptomTimeChange}
						placeholder={'Example: 2 hours'} />
					<TextArea
						title={'Additional Notes:'}
						rows={5}
						resize={false}
						content={this.state.reactionNotes}
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