import React from 'react';
import TipForm from './Form';

function TipCalculator(){
        return(
        <div className="TipForm ">
                <div className="text-center pb-5">
                    <h1 className="pt-5 appTitle ">Tip Calculator</h1>
                    <h5 className="pt-4 container"><strong>Instructions:</strong> Fill in the form with your details and let us do the work! </h5>
                </div>

                <div className="text-center container">
                    <TipForm />
                </div>
                
            </div>
    );
}

export default TipCalculator;