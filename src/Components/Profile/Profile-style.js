import  styled from 'styled-components';


export const profile_skills = styled.div`
padding: 50px 0;
overflow: hidden;
`
;

export const Profile = styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {        
            margin-bottom: 20px;
            width: 100%;
            float: none;
    }
   
`
;


export const ProfileList = styled.ul`
list-style: none
`
;


export const ProfileItem = styled.li`
margin-bottom: 8px;
`
;

export const ProfileItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    font-weight: ${props =>props.id ===6 ?  "normal" : "bold"};
    color: ${props =>props.id ===6 ?  "#eb5424" : ""};
`
;


export const Skills = styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none
    } 
    
}
`;


export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`;


export const SkillsBar = styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px
` ;




export const SkillsBarTiTle = styled.h4`
float: left;
`;



export const SkillsBarPerc = styled.span`
    float: right;
    margin-right: 100px
` ;


export const SkillsBarParent =styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`;



export const SkillsBarParentSpan =styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width : ${props => props.id === 1 ? "100%" : ''};
    width : ${props =>  props.id === 2 ? "90%" : ''};
    width : ${props =>  props.id === 3 ? "80%" : ''};
    `
;


export const ProfileTitle =styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`;


export const SkillsTitle = styled.h4`
    font-size: 40px; 
    margin-bottom: 20px
`;

export const SkillsTitleSpan = styled.span`
    font-weight: normal;
`;

export const ProfileTitleSpan = styled.span`
    font-weight: normal;
`;



