function hexColor(arr,num){
let hxColor='#';
let newArr=[];
for(let i=0; i<num; i++){
    let rand=Math.floor(Math.random()*arr.length);
    hxColor +=arr[rand];
}
newArr.push(hxColor);
return newArr[0];
}

export {hexColor};