

const initialState = {
    list : []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "ADD":

  const{ id,data} = action.payload;

  
  if(data.length>2){
    
   
      return {
      ...state,
      list : [
          ...state.list,
          {
          id : id,    
         data : data
          }
  ]

  }

  }else{
    
      if(data==""){
        alert("please enter characters")
      }else{
        if(data.length<2){
          alert("please enter minimum 3 characters")
        }
      }
  }
   


    case "DELETE":

       const newList = state.list.filter((elm)=>elm.id !== action.id)
    return  {
        ...state,
        list : newList

    }

    case "REMOVE":

       
    return  {
        ...state,
        list : []

    }


  default:
    return state
  }
}

