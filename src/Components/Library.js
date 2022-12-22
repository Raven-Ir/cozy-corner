import React, {useState} from "react";
import Button  from "react-bootstrap/Button";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
import '../App.css'

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
                <div className="LibraryButtons">
                    {radios.map((radio, index) => (
                        <ToggleButton
                            key = {index}
                            id = {`radio-${index}`}
                            type = "radio"
                            name="radio"
                            value = {radio.value}
                            checked = {radioValue === radio.value}
                            onChange = {(e) => setRadioValue(e.currentTarget.value)}
                            variant = "outline-dark"
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