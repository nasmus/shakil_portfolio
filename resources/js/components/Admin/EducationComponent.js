import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import "./EducationComponent.css";
import personServices from '../../services/Person'


function EducationComponent() {

    const [eduName, setEduName] = useState(null);
    const [schooolName, setSchoolName] = useState(null);
    const [description, setDescription] = useState(null);

    const saveEducation = async() => {
        const data = {
            eduName,schooolName,description
        }
        const res = await personServices.educationSave(data);
        if(res.success) {
            alert(res.message)
        }
        else {
            alert(res.message)
        }
        
    }


    return (
        <div className="educationComponent">
            <div className="educationComponent__details">
                <h1>Add Education</h1>
                <div className="educationComponent__input1">
                    <input type="text" placeholder="education name"  onChange={(e) => setEduName(e.target.value)} />
                </div>
                <div className="educationComponent__input2">
                    <input type="text" placeholder="School name" onChange={(e) => setSchoolName(e.target.value)} />
                </div>
                <div className="educationComponent__textarea">
                    <textarea  placeholder="description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                
                <div className="educationComponent__button">
                <Button variant="contained" color="secondary" onClick={() => saveEducation()} >
                    Save Education
                </Button>
            </div>
            </div>
            
            
        </div>
    )
}

export default EducationComponent
