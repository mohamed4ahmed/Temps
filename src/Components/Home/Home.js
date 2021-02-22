import React from 'react' ;
import { HomeSection , Homeinformation , HomeInfo ,HomeDesc ,HomeTitle ,Span , Homebtn} from './Home-style';

const Home = () => { 
    return (
        <HomeSection>
        <div className="container">
            <Homeinformation>
                <HomeTitle>Mohamed Ahmed Abdelsalam</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <Homebtn>Let's Begin</Homebtn>
            </Homeinformation>
        </div>
    </HomeSection>
    )
}

export default Home ;