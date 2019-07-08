import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';
import { getStorage } from '../../sessionStorage/api'
import obj from '../../config'
import store from '../../store/index'
import 'antd/dist/antd.css';
import './left.less';

const { SubMenu } = Menu;
const Left: React.FC= () => {

    //初始化状态 openKeys为 sub1 同时定义状态为string
    const [ openKeys , setOpenKeys ] = useState<string[]>(["sub1"])
    const [ rootSubmenuKeys, setRoot] = useState<string[]>([]) //切换
    const [ meau , setMeau ] = useState<any[]>([])

    //副作用
    const onOpenChange = (openKeys:string[]) =>{
        const latestOpenKey:any = openKeys.find(key => openKeys.indexOf(key) === -1);
        if(rootSubmenuKeys.indexOf(latestOpenKey) === -1){
            //hook特性不需要加花括号
            setOpenKeys(openKeys);
        }else {
            setOpenKeys( 
                latestOpenKey ? [latestOpenKey] : []
            );
          }
    }

    const change_content = (key:any)=>{
        let keys = key.key
        if (getStorage(keys) == undefined) {
            const action = {
              type:"change_admin",
              value:keys
            }
            store.dispatch(action)
        }else{
            const action = {
              type:"change_session",
              value:keys,
              local: getStorage(keys)
            }
            store.dispatch(action)
        }
    }

    useEffect(()=>{
        // console.log(obj.sub) //sub就是配置文件中的左边导航
        let sub:any[] = obj.sub
        let total_arr:any[] = []
        let root:any[] = []

        for(let id = 0; id < sub.length; id++){
            let child_arr:any[] = []
            let big_key = sub[id][0] //big key
            let big_type = sub[id][1]//big type
            let big_name = sub[id][2]//big name
            let child = sub[id][3]
            for(let id in child){
                let key = child[id][0]
                let content = child[id][1]
                let childs = (<Menu.Item key={key} onClick={change_content.bind(key)}>{content}</Menu.Item>)
                child_arr.push(childs)
            }
            let part = ( <SubMenu key={big_key} title= { <span>  <Icon type={big_type}/><span>{big_name}</span></span> } >
                            {child_arr}
                        </SubMenu>)
            total_arr.push(part)
            root.push(big_key)
        }
        setRoot(root)
        setMeau(total_arr)
    },[])

    return ( 
    <div>
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 230 }}>   
            {meau}
      </Menu>
    </div>
    );
}

export default Left;
