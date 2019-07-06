import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import './content.less'

//Editable方法的参数对象接口
interface edittable{
    form:any;
    index:number;
    [propName: string]: any;
}


const Content: React.FC= () => {
    
    //设置状态editing状态为布尔false
    let input:any
    const [editing , setEdit] = useState<boolean>(false) 
    const EditableContext = React.createContext(null);

    const EditableRow = ({ form , index, ...props }:edittable) => (
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
    );
    
    const toggleEdit = () => {
        //new editings
        const editings:boolean = !{editing};
        
        setEdit(editings,()=>{
          if (editings) {
            input.focus();
          }
        });

    };

    const EditableFormRow = Form.create()(EditableRow);
    useEffect(()=>{
    },[])

    return ( 
    <div>
        我是内容
    </div>
    );
}

export default Content;
