export function setTableData(data){
    return {
        type:'SET_TABLEDATA',
        data
    }
}
export function setLoader(){
    return{
        type:'LOADER_TRUE'
    }
}
export function removeLoader(){
    return{
        type:'LOADER_FALSE'
    }
}