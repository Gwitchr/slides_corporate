export const saveState =(state)=>{
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  } catch (error) {
    console.warn('storage state error',error)
  }
}

export const loadState=()=>{
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState===null)return undefined
    const {ordersReducer,productsReducer} = JSON.parse(serializedState)
    return {
      ordersReducer,
      productsReducer
    }
  } catch(error){
    return undefined
  }
}
