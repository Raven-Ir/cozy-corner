import React, {useState} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../index.css';


function Library () {
    const[checked, setChecked] = useState(false);
    const[radioValue, setRadioValue] = useState('1');

    const radios = [
        {name: 'Main Library', value: '1'},
        {name: 'To be Read', value: '2'},
        {name: 'Did not Finish', value: '3'}
    ];

    return(
        
            <div className="LibraryLayout">
                <div className='library-buttons'>
                    {radios.map((radio, index) => (
                        <ToggleButton
                            key = {index}
                            id = {`radio-${index}`}
                            type = "radio"
                            name="radio"
                            value = {radio.value}
                            checked = {radioValue === radio.value}
                            onChange = {(e) => setRadioValue(e.currentTarget.value)}
                            variant = "outline-light"
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </div>
                <div className="LibraryContentLayout"></div>
            </div>
        

    );

}

export default Library;