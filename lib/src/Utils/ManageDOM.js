export const GetChildrenIds =(parentId)=>{
 let div = document.querySelector('#'+parentId);
 let childElements=[];
 for(let i=0;i<div?.children?.length;i++){
    let child = div?.children[i];
    if(child?.id){
        childElements.push(child?.id);
    }
 }
 return childElements;
};