import React, {Component} from 'react';
import IsResultNaN from './logic';
import InputError from './errors';

class TipForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            bill : '', 
            service :'', 
            people :'',
            showResults: false,
            billValid: true,
            peopleValid: true
        };

        this.handleBillChange = this.handleBillChange.bind(this);
        this.handleServiceChange = this.handleServiceChange.bind(this);
        this.handlePeopleChange = this.handlePeopleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}

    handleBillChange(event){
        this.setState({bill:event.target.value},
            () => {
                this.validateBill(); 
            });
    };

    handleServiceChange(event){
        this.setState({service:event.target.value});
        this.setState({showResults:false});
    };

    handlePeopleChange(event){
        this.setState({people:event.target.value},
            () => {
                this.validatePeople();
            });
    };

   

    validateBill = (props) => {
       // console.log(this.state.bill);
        (this.state.bill) > 0 ? this.setState({billValid:true}) : this.setState({billValid:false});
        this.setState({showResults:false});
    };

    validatePeople = (props) => {
        (this.state.people) > 0 ? this.setState({peopleValid:true}) : this.setState({peopleValid:false});
        this.setState({showResults:false});
    };
    
    handleSubmit(event) {
        event.preventDefault(); 
        this.validateBill();
        this.validatePeople();
        this.setState({showResults:true});
        console.log("Submitted");
        console.log(this.state);
    };


    render(){
        return(
            <div>
                <div>
                    { this.state.showResults ? 
                    <IsResultNaN 
                            bill={this.state.bill} 
                            service={this.state.service}
                            people={this.state.people} 
                            showResults={this.state.showResults}
                            billValid={this.state.billValid}
                            peopleValid={this.state.peopleValid}
                            /> 
                    : null }
                </div>    

                <div className="form pt-3 pb-5">
                    <div className="pb-3 form-group">
                        <label>How much is your bill ?</label>
                        <input className ="form-control" type="number" id="bill-amt" placeholder="example: $200" onChange={this.handleBillChange}/>
                        <div>
                            {this.state.billValid ?
                            null: <InputError /> 
                        }
                        </div> 
                    </div>
                    <div className="pb-3 form-group">
                        <label>How was the service today ?</label>
                        <select className="form-control" id="service" onChange={this.handleServiceChange}>
                            <option value="0"> SELECT OPTION </option>
                            <option value="0.30"> 30% - Exceptional </option>
                            <option value="0.20"> 20% - Good </option>
                            <option value="0.15"> 15% - Average </option>
                            <option value="0.10"> 10% - Not good </option>
                            <option value="0.05"> 5% - Terrible </option>
                        </select>
                    </div>
                    <div className="pb-5 form-group">
                        <label>How many people are splitting the bill ?</label>
                        <input className="form-control" type="number" id="people" placeholder="example: 2" onChange={this.handlePeopleChange} />
                        <div>
                            {this.state.peopleValid ?
                            null: <InputError /> 
                        }
                        </div>
                    </div>
                    <div>
                        <button className="btn submit-btn btn-block btn-lg" type="submit" onClick={this.handleSubmit} >SUBMIT</button>
                    </div>
                
                </div> 
            </div>
            

        );
   }

    
}


export default TipForm;