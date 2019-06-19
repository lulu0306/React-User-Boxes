import React from 'react'



// export default class Comment extends React.Component{
//     render(){
//         return(
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt ="avatar" src={faker.image.avatar()}/>
//                 </a>
//                 <div className="content">
//                     <a herf="/" className="author">
//                         {this.props.name}
//                     </a>
//                     <div className="metadata">
//                         <span className="date">{this.props.time}</span>
//                     </div>
//                     <div className="text">
//                        {this.props.post}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

const Comment = props =>{
        return(
        <div className="comment">
            <a href="/" className="avatar">
                <img alt ="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a herf="/" className="author">
                {props.name}
                </a>
            <div className="metadata">
                <span className="date">{props.time}</span>
            </div>
            <div className="text">
          {props.post}
            </div>
            </div>
        </div>

        )
    }

    export default Comment