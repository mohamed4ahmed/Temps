import React , { Component } from 'react' ;
import { WorkSection , WorkTitle ,Span ,WorkPart , Icon , PartTitle , Line ,PartDisc } from "./Work-style";
import  axios from 'axios' ;


class Work extends Component {

    state = { 
        works : []
    }

    componentDidMount() { 
        axios.get('js/data.json').then(resp => {this.setState({ works: resp.data.works }) })
    }


    render () { 
        const {works} = this.state ; 
        const WorksItems = works.map(item => {
            return ( 
                <WorkPart first = {item.id} key={item.id}> 
                    <Icon className ={item.icon_name}></Icon>
                    <PartTitle>{item.title}</PartTitle>
                    <Line/>
                    <PartDisc>
                        {item.body}
                    </PartDisc>
                </WorkPart>
            )
        }) 
        return (
            <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {WorksItems}
                
            </div>
        </WorkSection>
        )
    }
       
    } 
    


export default Work ;