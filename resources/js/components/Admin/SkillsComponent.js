import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./SkillsComponent.css";
import personServices from '../../services/Person'

function SkillsComponent() {
    const[language, setLanguage] = useState(null);
    const[fremwork, setFremwork] = useState(null);
    const[libraries, setLibraries] = useState(null);

    const saveLanguage = async() => {
        const data = {
            language
        }
        const res = await personServices.saveSkils(data)
        if(res.success)
        {
            alert(res.message)
        }
        else{
            alert(res.message)
        }
    }
    const saveFremwork = async() => {
        const data = {
            fremwork
        }
        const res = await personServices.saveSkils(data)
        if(res.success)
        {
            alert(res.message)
        }
        else{
            alert(res.message)
        }
    }
    const saveLibraries = async() => {
        const data = {
            libraries
        }
        const res = await personServices.saveSkils(data)
        if(res.success)
        {
            alert(res.message)
        }
        else{
            alert(res.message)
        }
    }


    return (
        <div className="skillComponent">
            <h1>ADD SIKLLS</h1>
            <div className ="skillComponent__frem">
                    <div className="skillComponent__left" >
                        <div className="skillComponent__language" >
                            <input type="text" placeholder="Add Languahe" onChange={(e) => setLanguage(e.target.value)} />
                            <Button variant="contained" color="secondary" onClick={() => saveLanguage()} >Add </Button>
                        </div>
                    
                        <div className="skillComponent__library">
                            <input type="text" placeholder="Add Library" onChange={(e) => setFremwork(e.target.value)} />
                            <Button variant="contained" color="secondary" onClick={()=> saveFremwork()} >Add </Button>
                        </div>
                    
                        <div className="skillComponent__freamwork">
                            <input type="text" placeholder="Add Freamwork" onChange={(e) => setLibraries(e.target.value)} />
                            <Button variant="contained" color="secondary" onClick={() => saveLibraries()} >Add </Button>
                        </div>
                    </div>
                    <div className="skillComponent__right" >
                        <div>
                            <h2>Language</h2>
                        </div>
                        <div>
                            <h2>Library</h2>
                        </div>
                        <div>
                            <h2>Freamwork</h2>
                        </div>
                    </div>
            </div>
                            
        </div>
    )
}

export default SkillsComponent
