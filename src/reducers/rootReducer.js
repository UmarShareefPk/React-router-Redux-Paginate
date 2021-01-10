const initState = {
    posts : [
        {
            "userId": 1,
            "id": 1,
            "title": "Umar",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "Qamar",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          }
    ]
}

const rootReducer = (state = initState , action) => {
 ;

  if(action.type == "DELETE_POST"){
      //console.log("here I am " + action.id );

      let nowPosts = state.posts.filter(p=> p.id != action.id);
     
      return {
        ...state,
        posts : nowPosts
      }

  }

    return state;
}

export default rootReducer