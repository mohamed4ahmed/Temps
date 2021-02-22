import React  , {useState , useEffect} from 'react' ;
import  {Portfolio ,PortfolioTitle , Span , PortfolioList ,PortfolioItem , BoxDiv , BoxDivImg ,BoxDivSpan ,BoxDivP}  from './Portfolie-style';
import axios from "axios";
const Portfolie = () => { 

    const [images ,setImages] = useState([]);

    useEffect( ()=>{
        axios.get('js/data.json').then(resp => {setImages(resp.data.portfolio) } )
    } , [])
    
    const theImage = images.map(item => { 
        return(
            <BoxDiv key= {item.id}>
                    <BoxDivImg src={item.image} alt="" />
                    <BoxDivP>
                        <BoxDivSpan>
                            Show Image
                        </BoxDivSpan>
                    </BoxDivP>
                </BoxDiv>
        )
    })

    return (
    
        <Portfolio>

            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
               {theImage}
                
            </div>
            
        </Portfolio>
        
    )
}

export default Portfolie ;