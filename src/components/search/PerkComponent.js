import React from 'react'

const PerkComponent = (props) => {
    return (
        <div className="Perk">
            <div className="perk-description-container">
                <div className="icon-container">
                    <img src={props.imagepath} alt="brand-recognition-icon" />
                </div>
                <p className='perk-title'>{props.perktitle}</p>
                <p className='perk-info'>{props.perkinfo}</p>
            </div>
        </div>
    )
}

export default PerkComponent