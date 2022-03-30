import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';

class SkillDevelop extends Component {

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
        
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>skills</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    {skilldevelop}
                </div>
                <div className='row'>
                    {skillcms}
                </div>
            </div>
        );
    }
}

export default SkillDevelop











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