import React, { useEffect } from 'react'
import PerkComponent from './PerkComponent'
import './searchStyle.scss'

const AdvanceStatisticsComponent = () => {

    let perkList = [
        {
            imagepath: '/images/icon-brand-recognition.svg',
            perktitle: 'Brand Recognition',
            perkinfo: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
        },
        {
            imagepath: '/images/icon-detailed-records.svg',
            perktitle: 'Detailed Records',
            perkinfo: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            imagepath: '/images/icon-fully-customizable.svg',
            perktitle: 'Fully Customizable',
            perkinfo: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        },
    ]

    useEffect(() => {
        let multiplier = -25;
        document.querySelectorAll('.Perk').forEach((item, idx) => {
            if (document.documentElement.clientWidth >= 475) {
                item.style.bottom = (multiplier * idx) + 'px';
            }
        })
    }, [])

    const generatePerks = perkList.map((perk, idx) => {
        if (idx === perkList.length - 1) {
            return <PerkComponent key={idx} imagepath={perk.imagepath} perktitle={perk.perktitle} perkinfo={perk.perkinfo} />
        }
        return <>
            <PerkComponent key={idx} imagepath={perk.imagepath} perktitle={perk.perktitle} perkinfo={perk.perkinfo} />
            <div className="line"></div>
        </>
    })


    return (
        <div className='STATISTICS'>
            <div className="Advanced-Container">
                <p className='stat-name'>Advanced Statistics</p>
                <p className='stat-info'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="Perks-Container">
                {generatePerks}
            </div>
        </div>
    )
}

export default AdvanceStatisticsComponent