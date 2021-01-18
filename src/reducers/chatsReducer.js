export function chatsReducer(state=null,action){ 
    switch(action.type)
    {
        case 'LOAD_CHATS':
        return action.payload;

        default:
        return state;    
    }
}