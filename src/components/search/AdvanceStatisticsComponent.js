import React, { useEffect } from 'react'
import PerkComponent from './PerkComponent'
import './searchStyle.scss'

const AdvanceStatisticsComponent = () => {

    useEffect(() => {
        let multiplier = -25;
        document.querySelectorAll('.Perk').forEach((item, idx) => {
            if (document.documentElement.clientWidth >= 475) {
                item.style.bottom = (multiplier * idx) + 'px';
            }
        })
    }, [])
    return (
        <div className='STATISTICS'>
            <div className="Advanced-Container">
                <p className='stat-name'>Advanced Statistics</p>
                <p className='stat-info'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="Perks-Container">
                <PerkComponent imagepath='/images/icon-brand-recognition.svg' perktitle='Brand Recognition' perkinfo="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content." />
                <div className="line"></div>
                <PerkComponent imagepath='/images/icon-brand-recognition.svg' perktitle='Brand Recognition' perkinfo="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content." />
                <div className="line"></div>
                <PerkComponent imagepath='/images/icon-brand-recognition.svg' perktitle='Brand Recognition' perkinfo="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content." />
            </div>
        </div>
    )
}

export default AdvanceStatisticsComponent