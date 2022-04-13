import React, { Component } from 'react';

class Experiences extends Component {
    render() {
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
 
        return (
            <div className="texts">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 headexp'><h1>Esperienze</h1></div>
                    </div>
                    <div>
                        {experiencecard}
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences