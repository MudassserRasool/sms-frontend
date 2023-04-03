var arr1 = [
    {
        id : 1,
        name: 'mudasser'
    },
    {
        id : 2,
        name: 'rasool'
    },
    {
        id : 3,
        name: 'ali'
    }
];

const index = arr1.findIndex((parm)=>{
    return parm.id===2;
})
arr1.splice(index,1)
console.log(arr1)