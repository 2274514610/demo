import {combineReducers} from 'redux'
// export default function count(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }

// export default function count(state = {
//     count: 1
// },action) {
//     switch(action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//         default:
//             return state
//     }
// }

let initialState = {
    arr: [
        {
            text: '学习redux',
            isDone: false,
            isEditor: false
        }
    ],
    status: 1    //1 全部显示  2 显示未完成   3 显示已完成
}

// export default function todoApp (state = initialState,action) {
//     switch (action.type) {
//         case 'ADD_ITEM':
//             return {
//                 ...state,
//                 arr: [
//                     ...state.arr,
//                     action.item
//                 ]
//             }
//         case 'TOGGLE':
//             const arr = [...state.arr];
//             arr[action.index].isDone = !arr[action.index].isDone
//             return {
//                 ...state,
//                 arr
//             }
//         case 'REMOVE':
//             // const arrRemove = [...state.arr];
//             // arrRemove.splice(action.index,1)
//             return {
//                 ...state,
//                 arr:state.arr.filter((item,index) => index !== action.index)
//             }
//         case 'TOGGLE_EDITOR':
//             return {
//                 ...state,
//                 arr: state.arr.map((item,index)=> {
//                     if(index === action.index) {
//                         item.isEditor = !item.isEditor
//                     }
//                     return item
//                 })
//             }
//         case 'HANDLE_CHANGE':
//             const handle_arr = [...state.arr]
//             handle_arr[action.index].text = action.text
//             return {
//                 ...state,
//                 arr: handle_arr
//             }
//         case 'CHANGE_STATUS':
//             return {
//                 ...state,
//                 status: action.status
//             }
//         default:
//             return state
//     }
// }

function todoStatus(state = 1, action) {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return action.status
        default:
            return state
    }
}

function todoItem(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const newAdd = [...state, action.item];
            return newAdd
        case 'TOGGLE':
            const arr = [...state];
            arr[action.index].isDone = !arr[action.index].isDone
            return arr
        case 'REMOVE':
            // const arrRemove = [...state.arr];
            const RemoveArr = [...state];
            // RemoveArr.filter((item, index) => index !== action.index)
            RemoveArr.splice(action.index,1)
            return RemoveArr
        case 'TOGGLE_EDITOR':
            const Editor_arr = [...state];
            Editor_arr.map((item, index) => {
                if (index === action.index) {
                    item.isEditor = !item.isEditor
                }
                return item
            })
            return Editor_arr
        case 'HANDLE_CHANGE':
            const handle_arr = [...state]
            handle_arr[action.index].text = action.text
            return handle_arr
        default:
            return state
    }
}

// export default function todoApp(state = initialState, action) {
//     return {
//         arr: todoItem(state.arr, action),
//         status: todoStatus(state.status, action)
//     }
// }



const todoApp = combineReducers({
    arr: todoItem,
    status: todoStatus,
})

export default todoApp

