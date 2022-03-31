import React, { Component } from 'react';

class Experiences extends Component {
    render() {
        const experiencecard = this.props.experiences.map((experience) => {
            return (
                <div key={experience.id} className="expbox-card">
                    <div className='expbox-title'>
                        {experience.title} <br /> {experience.date}
                    </div>
                    <div className='expbox-content'>
                        {experience.body}
                    </div>
                </div>
            )
        });
 
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>Esperienze</div>
                </div>
                <div className='expbox'>
                    {experiencecard}
                </div>
            </div>
        )
    }
}

export default Experiences