import React, { useEffect, useState } from 'react'
import "./Education.css"
import personServices from "../../js/services/Person"


function Education() {
    const [eduValue, setEduValue] = useState([]);
    
    useEffect(() => {
        async function fatchDateEdu(){
            const res = await personServices.eduShow();
            setEduValue(res.data)
        }
        fatchDateEdu()
    }, [])


    return (
        <div className="education">
            
            <div className="education__center">
                <div className="education__title">
                    <img src="https://i.pinimg.com/originals/9d/20/d4/9d20d4a6d74cfad3d9c60faae40d5f85.jpg" />
                    <h1>Education</h1>
                </div>
                <div className="education__info">
                    {
                        eduValue.map((edu)=> {
                            return(
                                <div className="education__details" >
                                    <h1>{edu.educatin_name}</h1>
                                    <div className="education__pag">
                                        <p>{edu.education_description}</p>
                                    </div>                   
                                </div>                                 
                            )
                        })
                    }                    
                </div>
            </div>
        </div>
    )
}

export default Education
