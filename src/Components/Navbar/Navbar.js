import React from 'react' ;
import { NavbarSection , Logo , LogosH2 , UlList , ListItems , Ancor ,NLink} from './Navbar-syle';


const Navbar = () => { 
    return (
       
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogosH2>Ultra Profile</LogosH2>
                </Logo>
                
                
                <UlList>
                    <ListItems><NLink to="/">Home</NLink></ListItems>
                    <ListItems><NLink to="/Work">Work</NLink></ListItems>
                    <ListItems><NLink to="/Portfolio">Portfolio</NLink></ListItems>
                    <ListItems><NLink to="/Profile">Profile</NLink></ListItems>
                    <ListItems><NLink to="/About">About</NLink></ListItems>
                    <ListItems><NLink to="/Website">Website</NLink></ListItems>
                    <ListItems><NLink to="/Contact">Contact</NLink></ListItems>
                </UlList>
                 
            </div>
            
        </NavbarSection>
        
    )
}

export default Navbar ;