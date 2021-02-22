import styled  from "styled-components";

export const Creative = styled.div`
    height: 600px;
    background: url('images/snow2.jpg'); 
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) { 
    height: 650px;
    }
       `; 
    

export const CreativeInfo = styled.div`
    padding-top: 10px;
    width: 50%;
    float: left;
    @media (max-width:991px) { 
        width: 100%;
        padding-top: 10px;
        float: none;
    }` ;


export const CreatveTitle = styled.h2`
font-weight: bold;
font-size: 50px;
margin:10px 0 ;
` ;


export const Span = styled.span`
font-weight: normal
`


export const CreativeDir = styled.h4`
font-size: 40px;
color: #ee7027;
margin-top: 10px;
margin-bottom: 20px;

@media (max-width:991px) {
    font-size: 30px; 
}
`;



export const InfoDesc = styled.p`
    color:#2a2b23;
    margin-bottom: 15px;
    line-height: 1.8;
` ;

export const InfoescA = styled.a`
    margin-left: 15px;
    text-decoration: none;
    color: #ee7027;
    font-weight : bold;
    border: 0.5px solid #e1e2dc;
    background: #eee8e4; 
`

