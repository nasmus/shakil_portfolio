import React, { useEffect, useState } from 'react'
import "./PortfolioPage.css"
import personServices from "../../services/Person"
import { Link } from "react-router-dom"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function PortfolioPage() {
    const [portfolioValue, setPortfolioValue] = useState([])
    useEffect(() => {
        async function fatchDataPortfolio(){
            const res = await personServices.portfolioShow();
            setPortfolioValue(res.data)
        }
        fatchDataPortfolio()
    },[])

    return (
        <div className="PortfolioPanel">
            <h1>Portfolio Page</h1>
        
        <div className="portfolioPage">
        {
            portfolioValue.map((item) => {
                return(                    
                        <div className="portfolioPage__body">
                            <div className="portfolioPage__title">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="portfolioPage__buttomDiv">
                        
                            <div className="portfolioPage__button" >
                                <Link className="portfolioPage__Link" to={"/details/"+item.id} >
                                    <h4>Details</h4>
                                </Link>
                            
                            </div>
                            <div className="portfolioPage__button" >
                                <a href={item.link}>
                                    <h4>Live Priview</h4>
                                </a>
                            </div>
                        
                            </div>    
                        </div>                    
                )
            })
        }
    </div>  
    </div>         
    )
}

export default PortfolioPage 