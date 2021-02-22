import React  , {useState , useEffect}from 'react' ;
import * as Alls from './Profile-style' ;

import axios from 'axios';



const Profile = () => { 

    const [title , setTitle] = useState([]);
    
    useEffect( ()=> { 
        axios.get('js/data.json').then(resp => { setTitle(resp.data.profileInfo)})
    } ,[])

    const theTitle = title.map( item =>  { 
        return( 
            <Alls.ProfileItem key ={item.id}>
                   <Alls.ProfileItemSpan id={item.id}>{item.title}</Alls.ProfileItemSpan>
                    {item.presentag}
            </Alls.ProfileItem>      
        )
        
    })

    const [proskill , setProskill] = useState([]);
    useEffect( ()=> { 
        axios.get('js/data.json').then(resp => { setProskill(resp.data.profileSkills)})
    } ,[])

    const theSkillsDeg = proskill.map( item =>  { 
        return( 
            <Alls.SkillsBar key ={item.id}>
                        <Alls.SkillsBarTiTle>{item.title}</Alls.SkillsBarTiTle>
                        <Alls.SkillsBarPerc>{item.presentag}</Alls.SkillsBarPerc>
                        <Alls.SkillsBarParent>
                        <Alls.SkillsBarParentSpan  id={item.id}></Alls.SkillsBarParentSpan>
                        </Alls.SkillsBarParent>
                    </Alls.SkillsBar>
        )
    })
    
    return (
        <Alls.profile_skills>
            <div className="container">
                <Alls.Profile>
                    <Alls.ProfileTitle><Alls.ProfileTitleSpan>My </Alls.ProfileTitleSpan>Profile</Alls.ProfileTitle>
                    <Alls.ProfileList>
                       {theTitle}
                    </Alls.ProfileList>
                </Alls.Profile>
                
                <Alls.Skills>
                    <Alls.SkillsTitle>Some <Alls.SkillsTitleSpan>skills</Alls.SkillsTitleSpan></Alls.SkillsTitle>
                    <Alls.SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Alls.SkillsDesc>
                    {theSkillsDeg}
                </Alls.Skills>
                
            </div>
        </Alls.profile_skills>
    )
}

export default Profile ;