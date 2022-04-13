import React, { Component } from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

class Port extends Component {
    render() {
        const portfolioslink = this.props.portfolios.map((portfolio) => {
            return (
                <div key={portfolio.id} className='col-12 col-md-5 m-1'>
                    <a href={portfolio.link} target='_blank' rel='noreferrer'>
                        <Card>
                            <CardImg width='100%' src={portfolio.image} alt={portfolio.name} href={portfolio.link}/>
                            <CardTitle>{portfolio.name}</CardTitle>
                        </Card>
                    </a>
                </div>
            )
        })

        return (
            <div className="texts">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            {portfolioslink}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Port