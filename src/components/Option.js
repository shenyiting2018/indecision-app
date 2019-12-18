import React from 'react';

const Option = (props) => (
    <div>
        {props.optionTest}
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionTest);
            }}
        >
            remove
        </button>
    </div>
);

export default Option;