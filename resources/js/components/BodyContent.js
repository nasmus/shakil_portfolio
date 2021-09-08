import React from 'react'
import { Avatar } from '@material-ui/core'
import "./BodyContent.css"

function BodyContent({title, content }) {
    return (
        <div className="bodyContent">                           
                <h1>{title}</h1>                           
                <p>{content}</p>
                
                                  
        </div>
    )
}

export default BodyContent
