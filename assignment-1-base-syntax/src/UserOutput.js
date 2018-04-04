import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
       <p>Username is: {props.user}</p>
       <p>Paragraph text</p>
    </div>
  );
}

export default userOutput;