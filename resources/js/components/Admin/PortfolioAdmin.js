import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import personServices from '../../services/Person'
import "./PortfolioAdmin.css";
import Button from '@material-ui/core/Button';


function PortfolioAdmin() {
    const [title, setTitle] = useState(null);
    const [details, setDetails] = useState(null);
    const [link, setLink] = useState(null);
    const [date, setStartDate] = useState(new Date());

    const savePortfoliopage = async() => {
        const data = {
            title, details,link,date
        }
        const res = await personServices.saveportfolio(data)
        if(res.success)
        {
            alert(res.message)
        }
        else{
            alert(res.message)
        }
    }

    return (
        <div className="portfolioAdmin">
            <h1>Portfolio Page</h1>
                <div className="portfolioAdmin__container">
                    <div className="portfolioAdmin__title">
                        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="portfolioAdmin__description">
                        <textarea type="text" placeholder="Description" onChange={(e) => setDetails(e.target.value)} />
                    </div>
                    <div className="portfolioAdmin__submit">
                        <input type="text" placeholder="Project Link" onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div className="portfolioAdmin__date">
                        <DatePicker className="portfolioAdmin__datep" selected={date} onChange={(e) => setStartDate(e)} />
                    </div>
                    <div className="portfolioAdmin__button">
                        <Button variant="contained" color="secondary" type="submit" onClick={() => savePortfoliopage()} > save </Button>
                    </div>
                </div>
            </div>
    )
}

export default PortfolioAdmin
