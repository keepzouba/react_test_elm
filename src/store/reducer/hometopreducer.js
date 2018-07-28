const Hometopdefault={
    name:'正在定位中...'
}

export default (state=Hometopdefault,aciton)=>{
    console.log(aciton);
    switch (aciton.type){
        case 'GET_ADDRESS_FULFILLED':
            let newName = JSON.parse(JSON.stringify(state));
            newName.name=aciton.payload.name;
            return newName;
        default:
            return state
    }
}