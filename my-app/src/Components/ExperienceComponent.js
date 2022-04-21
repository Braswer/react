import React, { Component } from 'react';
import { withTranslation } from "react-i18next";

class Experiences extends Component {

    render() {
        const { t } = this.props

        const experiencecard = this.props.experiences.map((experience) => {
            return (
                <div key={experience.id} className="expbox">
                    <div className='expbox-card'>
                        <div className='expbox-title'>
                            {experience.title} <br /> {experience.date}
                        </div>
                        <div className='expbox-content'>
                            {experience.body}
                        </div>
                    </div>
                </div>
            )
        });

        const experiencesengcard = this.props.experienceseng.map((experienceeng) => {
            return (
                <div key={experienceeng.id} className="expbox">
                    <div className='expbox-card'>
                        <div className='expbox-title'>
                            {experienceeng.title} <br /> {experienceeng.date}
                        </div>
                        <div className='expbox-content'>
                            {experienceeng.body}
                        </div>
                    </div>
                </div> 
            )
        })
        
        if (t('header.experience') === 'Esperienze') {
            return (
                <div className="texts">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 headexp'><h1 className='expsectortitle'>{t('header.experience')}</h1></div>
                        </div>
                        <div>
                            {experiencecard}
                        </div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className="texts">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 headexp'><h1 className='expsectortitle'>{t('header.experience')}</h1></div>
                        </div>
                        <div>
                            {experiencesengcard}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const ExpTrans = withTranslation()(Experiences);

export default ExpTrans