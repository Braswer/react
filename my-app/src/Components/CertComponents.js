import React, { Component } from 'react';
import { withTranslation } from "react-i18next";


class Cert extends Component {
    render() {
        const { t } = this.props
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

        return (
            <div className="texts">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>{t("header.certifications")}</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            {certificateslink}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const CertTrans = withTranslation()(Cert);

export default CertTrans