import React from 'react'

const Feature = (props) => {
    return (
        <div className="Feature-Container">
            <p className="Title">{props.featurename}</p>
            <ul>
                {props.featurelist.map((item, idx) => {
                    return <li key={idx}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Feature