import React, { Component } from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';


class CertPort extends Component {
    render() {
        const certificateslink = this.props.certificates.map((certificate) => {
            return (
                <div key={certificate.id}>
                    <div>
                        <a href={certificate.file}>
                            <img src={certificate.img} alt={certificate.name} />
                        </a>
                    </div>
                    <div>
                        {certificate.name}
                    </div>
                </div>
            )
        })

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
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        Certificati
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {certificateslink}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        Portfolio
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {portfolioslink}
                    </div>
                </div>
            </div>
        )
    }
}

export default CertPort