import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import Comment from './comment.js'
import Card from './Card.js'



const App = ()=>{
    return (
        <div className="ui container comments">
        <Card>
            <Comment 
                name="Andrew" 
                time="5:00 pm" 
                post="Nice post" 
                avatar={faker.image.avatar()}
            />
       </Card> 
       <Card>    
            <Comment
                name="Michael"
                time="6:00 pm" post="Happy!" 
                avatar={faker.image.avatar()}
            />
        </Card>
        <Card>    
            <Comment 
                name="Julia" 
                time="9:00 pm"
                post="Haha" 
                avatar={faker.image.avatar()}
            />
        </Card>     
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))