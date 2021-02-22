import React from 'react' ;
import {Creative , CreativeInfo , CreatveTitle , Span ,CreativeDir  ,InfoDesc , InfoescA  } from './Website-style';

const Website = () => { 
    return (
        <Creative>
            <div className="container">
                <CreativeInfo>
                    <CreatveTitle><Span> Take </Span>Overview  WEBSITES </CreatveTitle>
                    <CreativeDir>GO TO MY Other Websites</CreativeDir>
                    <InfoDesc>
                        Recipe App to get favourite meals   <InfoescA href="https:mohamed4ahmed.github.io/RecipeApp">Recipe</InfoescA> 
                    </InfoDesc> <InfoDesc>
                        MovieApp App <InfoescA href="https://mohamed4ahmed.github.io/MovieApp/">Movie</InfoescA> 
                    </InfoDesc> 
                    <InfoDesc>
                        Weather App to get templature degree <InfoescA href="https://mohamed4ahmed.github.io/Weather/">Weather</InfoescA> 
                    </InfoDesc> <InfoDesc >
                        Simple QuizApp  click to go <InfoescA href="https:mohamed4ahmed.github.io/QuizApp">Quiz</InfoescA> 
                    </InfoDesc> <InfoDesc>
                        Todolist   <InfoescA href="https://mohamed4ahmed.github.io/todo">todolist </InfoescA> 
                    </InfoDesc>
                    <InfoDesc>
                        todoList App   <InfoescA href="https://mohamed4ahmed.github.io/Todo">Todo  </InfoescA> 
                    </InfoDesc>
                    <InfoDesc>
                        Course list   <InfoescA href="https://mohamed4ahmed.github.io/curd">course List</InfoescA> 
                    </InfoDesc>
                    <InfoDesc >
                        Cowenter  New Year Eve    <InfoescA href="https://mohamed4ahmed.github.io/Cowenter/"> Cowenter Dowen </InfoescA> 
                    </InfoDesc>
                   
                
                </CreativeInfo>
            </div>
        </Creative>
        
    )
}

export default Website ;