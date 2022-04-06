import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';

class SkillBoard extends Component {

    render() {
        const develop = this.props.skills.filter(skill => skill.category === 'Develop').map((skill) => {
            return (
                <div key={skill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={skill.image} alt={skill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{skill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{skill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const cms = this.props.skills.filter(skill => skill.category === 'CMS').map((skill) => {
            return (
                <div key={skill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={skill.image} alt={skill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{skill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{skill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const lang = this.props.skills.filter(skill => skill.category === 'Lang').map((skill) => {
            return (
                <div key={skill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={skill.image} alt={skill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{skill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{skill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const more = this.props.skills.filter(skill => skill.category === 'More').map((skill) => {
            return (
                <div key={skill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={skill.image} alt={skill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{skill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{skill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const coming = this.props.skills.filter(skill => skill.category === 'Coming').map((skill) => {
            return (
                <div key={skill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={skill.image} alt={skill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{skill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{skill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });
        
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Skills</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    {develop}
                </div>
                <div className='row'>
                    {cms}
                </div>
                <div className='row'>
                    {lang}
                </div>
                <div className='row'>
                    {more}
                </div>
                <div className='row'>
                    {coming}
                </div>
            </div>
        );
    }
}

export default SkillBoard











/*function RenderSkillItem({skill}) {
    return(
        <Card>
                <CardImg width='100%' src={skill.image} alt={skill.name} />
                <CardImgOverlay body className="ml-5">
                    <CardBody>{skill.level}</CardBody>
                </CardImgOverlay>
                <CardTitle><strong>{skill.name}</strong></CardTitle>
        </Card>
    );
}

const SkillBoard = (props) => {
    const skillboard = props.skills.map((skill) => {
        return (
            <div key={skill.id} className='col-12 col-md-5 m-1'>
                <RenderSkillItem skill={skill} />
            </div>
        );
    });

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h3>skills</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                {skillboard}
            </div>
        </div>
    );

}

export default SkillBoard*/