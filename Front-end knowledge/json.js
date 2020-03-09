const Tree = [{
    "id": 1,
    "parentId": 0,
    "name": "一级菜单A",
    "rank": 1,
    "children": [{
        "id": 4,
        "parentId": 1,
        "name": "二级菜单A-A",
        "rank": 2,
        "children": [{
            "id": 7,
            "parentId": 4,
            "name": "三级菜单A-A-A",
            "rank": 3,
            "children": [{
                "id": 8,
                "parentId": 7,
                "name": "四级菜单A-A-A-A",
                "rank": 4,
                "children": [{"id": 9, "parentId": 8, "name": "五级菜单A-A-A-A-A", "rank": 5}]
            }]
        }]
    }, {"id": 5, "parentId": 1, "name": "二级菜单A-B", "rank": 2}]
}, {
    "id": 2,
    "parentId": 0,
    "name": "一级菜单B",
    "rank": 1,
    "children": [{"id": 6, "parentId": 2, "name": "二级菜单B-A", "rank": 2}]
}, {"id": 3, "parentId": 0, "name": "一级菜单C", "rank": 1}];

let newArr = [];

function TreeToLine(TreeData) {
    let cloneData = JSON.parse(JSON.stringify(TreeData));
    cloneData.map(item => {
        if (item.children) {
            let oldArr = JSON.parse(JSON.stringify(item));
            delete oldArr.children;
            newArr.push(oldArr);
            TreeToLine(item.children)
        } else {
            newArr.push(item)
        }
    })
};

TreeToLine(Tree);
newArr.sort((prev,curr)=> {
   return prev.id - curr.id
});
console.log(newArr);