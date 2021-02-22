import React , { Component} from 'react' ;
import { SocialMediaSection ,Social , Icon , Para , Span , SpanInfo} from './SocialMedia-style';
import axios from "axios";
class  SocialMedia extends Component { 

    state = { 
        Focial : []
    }

    componentDidMount () { 
        axios.get("js/data.json").then(resp => { this.setState({Focial : resp.data.social}) } )
    }


    render() {
        
        const {Focial} = this.state ;
        const SocialItems = Focial.map(item => { 
            return(
                <Social item={item.id} key={item.id}>
                <Icon className={item.icon}></Icon>
                <Para>
                    <Span>{item.title}</Span>
                    <SpanInfo> {item.body}</SpanInfo>
                </Para>
            </Social>
            )
        })
        
        return (
         
            <SocialMediaSection> 
               {SocialItems}
            </SocialMediaSection>
        
        )
    }

   
}

export default SocialMedia ;