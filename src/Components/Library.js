import React, {useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Library () {
    const[checked, setChecked] = useState(false);
    const[radioValue, setRadioValue] = useState('1');

    const radios = [
        {name: 'Main Library', value: '1'},
        {name: 'To be Read', value: '2'},
        {name: 'Did not Finish', value: '3'}
    ];

    return(
        <div className="LibraryButtons">
            <ButtonGroup className="mb-2">
                {radios.map((map, index) => (

                    <ToggleButton 
                        key={index}
                        id={`radio-${index}`}
                        type="radio"
                        variant=""
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>

    );

}

export default Library;