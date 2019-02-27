export function saveAction(data){
    console.log("saveAction called..");
    return{
        type:"add",
        users: data
    }
}