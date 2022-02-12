let state = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hi, how are you?', quantityLikes: 154},
            {id: 1, message: 'It`s my first post', quantityLikes: 254},
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Alexandr'},
            {id: 4, name: 'Valery'},
            {id: 5, name: 'Maksim'},
            {id: 6, name: 'Artem'}
        ],
        messagesData: [
            {id: 0, message: 'Hi'},
            {id: 1, message: 'How are you!'},
            {id: 2, message: 'Fine. Thank you! And you?'},
            {id: 3, message: 'Me too'},
            {id: 4, message: 'Me too'},
            {id: 5, message: 'Me too'}
        ]
    }
}

 export const addPost =(postMessage) =>{
    let newPost = {
        id: 3,
        message: postMessage,
        quantityLikes: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;
