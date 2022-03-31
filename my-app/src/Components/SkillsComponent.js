import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';

class SkillBoard extends Component {

    render() {
        const skilldevelop = this.props.developskills.map((developskill) => {
            return (
                <div key={developskill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={developskill.image} alt={developskill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{developskill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{developskill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const skillcms = this.props.cmsskills.map((cmsskill) => {
            return (
                <div key={cmsskill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={cmsskill.image} alt={cmsskill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{cmsskill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{cmsskill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const skilllang = this.props.langskills.map((langskill) => {
            return (
                <div key={langskill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={langskill.image} alt={langskill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{langskill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{langskill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const skillmore = this.props.moreskills.map((moreskill) => {
            return (
                <div key={moreskill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={moreskill.image} alt={moreskill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{moreskill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{moreskill.name}</strong></CardTitle>
                    </Card>
                </div>
            );
        });

        const skillcoming = this.props.comingskills.map((comingskill) => {
            return (
                <div key={comingskill.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={comingskill.image} alt={comingskill.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardBody>{comingskill.level}</CardBody>
                        </CardImgOverlay>
                        <CardTitle><strong>{comingskill.name}</strong></CardTitle>
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
                    {skilldevelop}
                </div>
                <div className='row'>
                    {skillcms}
                </div>
                <div className='row'>
                    {skilllang}
                </div>
                <div className='row'>
                    {skillmore}
                </div>
                <div className='row'>
                    {skillcoming}
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