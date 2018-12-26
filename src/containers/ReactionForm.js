import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';
import Checkbox from '../components/Checkbox';

class ReactionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
      	entryTime: '',
         symptoms: [],
			selectedSymptoms: []
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleEntryTimeChange = this.handleEntryTimeChange.bind(this);
		this.handleSymptomSelect = this.handleSymptomSelect.bind(this);
   }
	componentDidMount() {
      fetch('./reaction-questionnaire.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
               entryTime: data[0].answers,
               symptoms: data[1].answers[0],
               selectedSymptoms: data.selectedSymptoms,
            });
            console.log(data[0].answers)
            console.log(data[1].answers[0])
            console.log(data.selectedSymptoms)
			});
	}
	handleEntryTimeChange(e) {
		this.setState({ entryTime: e.target.value }, () => console.log('entry time:', this.state.entryTime));
   }
   handleSymptomSelect(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if(this.state.selectedSymptoms.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedSymptoms.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedSymptoms, newSelection];
		}
		this.setState({ selectedSymptoms: newSelectionArray }, () => console.log('symptom selection', this.state.selectedSymptoms));
	}
	handleFormSubmit(e) {
      e.preventDefault();
      
      const formPayload = {
         entryTime: this.state.entryTime,
         selectedSymptoms: this.state.selectedSymptoms,
      };
		console.log('Send this in a POST request:', formPayload);
	}
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h3>Reaction Log Entry</h3>
            <SingleInput
					inputType={'text'}
					title={'Log entry time:'}
					name={'entryTime'}
					controlFunc={this.handleEntryTimeChange}
					content={this.state.entryTime}
					placeholder={'Type current date and time here'} />
            <Checkbox
					title={'What types of symptoms are you experiencing?'}
					setName={'symptom'}
					type={'checkbox'}
					controlFunc={this.handleSymptomSelect}
					options={this.state.symptoms}
					selectedOptions={this.state.selectedSymptoms} />
            <input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
			</form>
		);
	}
}

export default ReactionForm;