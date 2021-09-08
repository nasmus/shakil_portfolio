import React, { useEffect, useState } from 'react'
import personServices from "../../services/Person";
import "./PortfolioDetails.css";
import Header from '../Header';
import ContactUs from '../ContactUs';


function PortfolioDetails(props) {   
    const[ title, setTitle] =useState(null);
    const[ details, setDetails] = useState(null);
    const[ date, setDate] = useState(null);
    const id=props.match.params.id;

    useEffect(()=> {
        async function fatchdataPortfolio() {
            
            const res = await personServices.portfolioDetailsShow(id);
            
            if(res.success)
            {
                const data = res.data;
                setTitle(data.title);
                setDetails(data.details);
                setDate(data.date);
            }
            else {
                alert(res.message)
            }
        }
        fatchdataPortfolio()
    },[])

    return (
        <div className="Details">
            <Header />
            <div className="PortfolioDetails">
                <h1>Portfolio details</h1>
                <div className="PortfolioDetails__title">
                    <h1>{title}</h1>
                    <p>{details}</p>
                    <div className="PortfolioDetails__date">
                        <h5>{date}</h5>
                    </div>                    
                </div>
                
            </div>
            <ContactUs />
        </div>
    )
}

export default PortfolioDetails
