import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import personServices from "../../services/Person";
import "./TitleAndPhoto.css";

function TitleAndPhoto() {

    const [name, setName] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [age, setAge] = useState(null)
    const [city, setCity] = useState(null)

   const savePerson = async() => {
       const data = {
           name, title, city, description, age
       }
       const res = await personServices.personDetailsSave(data);

       if(res.success) {
           alert(res.message)
       }
       else{
           alert(res.message)
       }
   }

    return (
        
            <div className="titleAndPhoto">
           
           <h1>Add Title And Photo</h1>
               <div className="titleAndPhoto__discription">
                   <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
               </div>
               <div className="titleAndPhoto__age">
                   
                   <input type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
               </div>
               <div className="titleAndPhoto__city">
                   
                   <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
               </div>
           
               <div className="titleAndPhoto__title">
                   <textarea rows="4" cols="50" placeholder="Body title" onChange={(e) => setTitle(e.target.value)} ></textarea>
               </div>
               <div className="titleAndPhoto__Body_Discription">
                   <textarea rows="4" cols="50" placeholder="Body Discription" onChange={(e) => setDescription(e.target.value)} ></textarea>
               </div>
               
               <div className="titleAndPhoto__button">
                    <Button variant="contained" color="secondary" type="submit" onClick={() => savePerson()} >submit</Button>
               </div>
               
           
       </div>
        
        
    )
}

export default TitleAndPhoto
