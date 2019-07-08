//由于同级组件之间传参非常的麻烦，所以此处用redux
const defaultState = {
    admin: 0,
    content:[
                [      
                    {
                        key: 0
                    }
                ]
            ],
    delete:null,
    add:null
}





//行为
export default (state = defaultState, action)=>{
    //reducer 可以接受state，但是绝对不能修改state
    const newState = JSON.parse(JSON.stringify(state)) //对数据进行深拷贝

    if (action.type == "change_admin") {
        newState.admin = action.value
        if (newState.content[action.value] == undefined) {
            newState.content[action.value] =    [      
                {
                    key: 0
                }
            ]
        }
    }else if(action.type == "change_content"){
        newState.content[action.value] = action.content
    }else if(action.type == "change_session"){
        newState.admin = action.value
        newState.content[action.value] = JSON.parse(action.local)
    }else if(action.type == "bug_bug"){
        newState.content[0] = JSON.parse(action.value)
    }else if(action.type == "delete"){
        newState.delete = action.key
    }else if(action.type == "add"){
        newState.add = action.key
    }
    //新的newState会自动替换老的state
    return newState
}