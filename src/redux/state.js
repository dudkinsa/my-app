import {observe} from "web-vitals/dist/modules/lib/observe";

let rerenderEntireTree =() =>
{

}
let state = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hi, how are you?', quantityLikes: 154},
            {id: 1, message: 'It`s my first post', quantityLikes: 254},
        ],
        newPostText: 'New Post Text'

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
window.state =state;
//удаляем в функции addPost (postMessages)
export const addPost= () =>{

    let newPost ={
        id: 3,
        //изменяем postMessages на state.profilePage.newPostText
        message: state.profilePage.newPostText,
        quantityLikes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}
export const updateNewPostText= (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const addPostToMessages =(newPostToMessage) =>{
    let newPostToMessages ={
        id: 0,
        messages: newPostToMessage
    };
    state.messagesPage.messagesData.push();
    rerenderEntireTree(state);
}

//subscribe - перевод с английского: подпись
//observer - перевод с английского: обозреватель
export const subscribe =(observer)  =>{
    rerenderEntireTree =observer;
}

export default state;





