import React from 'react';

const MyNewPost =(props) => {

    console.log(props.messagePeople);
    return(
        <div>
            {props.messagePeople}
        </div>
    );
}

export default MyNewPost;