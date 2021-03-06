
// 通过node将线性数据转为树形，并存进一个文件中
const fs = require('fs');

const arr = [
    {id: 1, parentId: 0, name: '一级菜单A', rank: 1},
    {id: 2, parentId: 0, name: '一级菜单B', rank: 1},
    {id: 3, parentId: 0, name: '一级菜单C', rank: 1},
    {id: 4, parentId: 1, name: '二级菜单A-A', rank: 2},
    {id: 5, parentId: 1, name: '二级菜单A-B', rank: 2},
    {id: 6, parentId: 2, name: '二级菜单B-A', rank: 2},
    {id: 7, parentId: 4, name: '三级菜单A-A-A', rank: 3},
    {id: 8, parentId: 7, name: '四级菜单A-A-A-A', rank: 4},
    {id: 9, parentId: 8, name: '五级菜单A-A-A-A-A', rank: 5}
];

function lineToTree (lineArr) {
    const copyArr = JSON.parse(JSON.stringify(lineArr));
    let endArr = copyArr.filter(father => {
        let childrenArr = copyArr.filter(children =>  children.parentId == father.id);
        if(childrenArr.length > 0) {
            father.children = childrenArr
        };
        return father.parentId == 0;
    });
    return endArr;
};

let Tree = lineToTree(arr);
let TreeStr = JSON.stringify(Tree);   //将转化后的数据转为JOSN字符串

fs.writeFile('json.js',TreeStr, err=> {
    if(err) {
        console.log(err)
    }
});