import React, { useEffect, useState } from 'react'
import "./Skills.css"
import personServices from "../../js/services/Person"

function Skills() {
    const [skillvalue, setSkillvalue] = useState([]);

    useEffect(() => {
        async function fatchDataSkils(){
            const res = await personServices.skillShow();
            setSkillvalue(res.data)
        }
        fatchDataSkils()
    }, [])
    return (
        <div className="skills">
            <div className="skills__title">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" className="skills__logo" />
                <h1>Skills</h1>
            </div>
            <div className="skills__info">
                <div className="skills__property">
                    <h2>Language</h2>
                        <ul>
                        {
                            skillvalue.map((skill) => {
                                if(skill.language != null){
                                    return(
                                    
                                        <li> <h4>{skill.language}</h4> </li>                                       
                                )
                                }
                                
                            })
                        }
                        </ul>
                </div>
                <div className="skills__property">
                    <h2>Fremwork</h2>
                    <ul>
                        {
                            skillvalue.map((skill) => {
                                if(skill.fremwork != null)
                                {
                                    return(
                                        <li> <h4>{skill.fremwork}</h4> </li>                                       
                                )
                                }
                            })
                        }
                    </ul>
                </div>
                <div className="skills__property">
                    <h2>Libraries</h2>
                    <ul>
                        {
                            skillvalue.map((skill) => {
                                if(skill.libraries != null){
                                    return(
                                        <li> <h4>{skill.libraries}</h4> </li>                                       
                                )
                                }
                                                                
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
