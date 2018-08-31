let initialState={
   tableData:[],
   loading:false,
}

export function RootReducer(state=initialState,action)
{
    switch(action.type)
    {
      case 'SET_TABLEDATA':
        return {
          ...state,
          tableData:action.data,

        }
      case 'LOADER_TRUE':
        return{
            ...state,
            loading:true,
        }
      case 'LOADER_FALSE':
          return{
             ...state,
             loading:false,
            }
      default:
        return state
    }

}
