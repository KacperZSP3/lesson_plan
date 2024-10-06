import React from 'react';
import './Headline.css'

const Headline = (props) => (
    <>
        <tr className="headline">
            {props.head.map((e) => <th key={e}>{e}</th>)}
        </tr>
    </>
)

export default Headline;