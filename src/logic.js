import React from 'react'

function CalculateTip(props){
    return(
        (props.showResults && props.peopleValid && props.billValid) ? (parseFloat(props.bill) * parseFloat(props.service)) : null
     );
}

function CalculateTotalWithTip (props) {
    return(
        (props.showResults && props.peopleValid && props.billValid) ? (parseFloat(props.bill) + parseFloat(CalculateTip(props))) : null
    );
}

function IndividualPrice (props) {
    var pricePerPerson = (parseFloat(CalculateTotalWithTip(props)) / parseFloat(props.people)).toFixed(2);
    return(
        isNaN(pricePerPerson) ? 0 : pricePerPerson
    );
}


function DisplayPrice (props) {
    return(
        <div className="mb-3 pt-5 pb-5 result">
            <h3>Each Person pays:</h3>
            <h1>$ <IndividualPrice 
                bill={props.bill} 
                service={props.service}
                people={props.people} 
                showResults={props.showResults}
                billValid={props.billValid}
                peopleValid={props.peopleValid}/> 
            </h1>  
        </div>
    );
}

function IsResultNaN (props){
    return(
        ((props.showResults && props.peopleValid && props.billValid) ? 
            <DisplayPrice 
                bill={props.bill} 
                service={props.service}
                people={props.people} 
                showResults={props.showResults}
                billValid={props.billValid}
                peopleValid={props.peopleValid}  /> : null
        )
        
    )
}

 export default IsResultNaN;
