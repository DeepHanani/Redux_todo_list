export const Additem = (data) => ({
  type: "ADD",
  payload : {
    id : new Date().getTime().toString(),
    data :data
  }
})

export const Deleteitem = (id) => ({
    type: "DELETE",
    id 
    
  })
  
  export const Removeitem = () => ({
    type: "REMOVE",
    
  })
