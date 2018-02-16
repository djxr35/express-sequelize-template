import React from 'react';
import NextChild from './NextChild';


export default function Something (props) {

  const something = props.something; // (maybe this.props..)

  return (
    <li>
      <div>
        <NextChild something = { something } />
      </div>
    </li>
  );
}
