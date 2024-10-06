import React from 'react';
import './Lesson.css';

const Lesson = (props) => {
    return (
        <tr>
            {Object.keys(props.name).map(key => (
                <td key={key} className={key}>
                    {props.name[key]}
                </td>
            ))}
        </tr>
    );
}

export default Lesson;