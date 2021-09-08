import React from 'react'
import "./SidebarRow.css"

function SidebarRow({Icon, title,header}) {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}
            <h3>{title}</h3>
            <h2>{header}</h2>            
            
        </div>
    )
}

export default SidebarRow
