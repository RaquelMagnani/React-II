import React from 'react';
import CompanyInfos from "../CompanyInfos/CompanyInfos"
import RoleInfos from "../RoleInfos/Roleinfos"
import "./card.css";

const Card = ({logo, company,position,postedAt, contract,location,tools,languages}) =>{
    return(
        <div className="card--container">
           <CompanyInfos
           logo ={logo}
           company ={company}
           position={position}
           postedAt ={postedAt}
           contract={contract}
           location={location}
           />
            <RoleInfos
            languages={languages}
            tools={tools}
            />
        </div>
    )
}

export default Card;