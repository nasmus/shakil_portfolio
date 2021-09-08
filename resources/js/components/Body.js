import React, { useEffect, useState } from 'react'
import "./Body.css";
import BodyContent from './BodyContent';
import personServices from "../../js/services/Person"
import ProfileImage from "./image/shakil.jpg"


function Body() {
    const [bodyshow, setBodyshow] = useState([]);

    useEffect(() => {
        async function fatchDataPerson(){
            const res = await personServices.showBody();
            setBodyshow(res.data);
        }
        fatchDataPerson();
        
    }, [])
    
    return (
        <div className="body">
            <div className="body__1">
                <div className="body__Left">
                    
                    <BodyContent title={bodyshow.map(list => {
                        return list.Body_title
                    })} />
                    <BodyContent content={bodyshow.map(list => {
                        return list.description
                    })} />
                </div>
                <div className="body__right">                
                    <img src={ProfileImage}/>               
                </div>
            </div>
          
        </div>
    )
}

export default Body
