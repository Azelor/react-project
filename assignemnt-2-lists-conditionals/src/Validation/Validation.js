import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text too short!!';

    if (props.inputLength >= 5) {
        validationMessage = 'Text long enough!'
    }

    return (
        <div>
            <p>{validationMessage}</p>
            <p>{props.inputLength}</p>
        </div>
    )
}

export default validation;