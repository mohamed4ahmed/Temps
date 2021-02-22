import React from 'react' ;
import {Creative , CreativeInfo , CreatveTitle , Span ,CreativeDir  ,InfoDesc , InfoescA  } from './About-Style';

const About = () => { 
    return (
        <Creative>
            <div className="container">
                <CreativeInfo>
                    <CreatveTitle><Span>This is</Span> Creative Director</CreatveTitle>
                    <CreativeDir> Front-End developer </CreativeDir>
                   
                </CreativeInfo>
            </div>
        </Creative>
        
    )
}

export default About ;

