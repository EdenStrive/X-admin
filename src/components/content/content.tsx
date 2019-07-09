import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { setStorage, getStorage } from '../../sessionStorage/api'
import store from '../../store/index'
import obj from '../../config'
import './content.less'

//Editable方法的参数对象接口
interface edittable{
    form:any;
    index:number;
    [propName: string]: any;
}

let EditableFormRow:any
const EditableContext = React.createContext(null);

const EditableRow = ({ form , index, ...props }:edittable) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

EditableFormRow = Form.create()(EditableRow);


const EditableCell: React.FC= (props) => {
    
    //设置状态editing状态为布尔false
    let input:any
    const [editing , setEdit] = useState<boolean>(false) 
    const [form , setForm] = useState<any>(null) 


    const toggleEdit = () => {
        //new editings
        const editings:boolean = !editing;
        setEdit(editings)
    };

    const save = (e:any)=>{
        const { record, handleSave }:any = props;
        form.validateFields((error:any, values:any) => {
            if (error && error[e.currentTarget.id]) {
              return;
            }
            toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    const renderCell = (form:any) =>{
        setForm(form)
        const { children, dataIndex, record, title }:any = props;
        const editings = editing;
        return editings ? (
        <Form.Item style={{ margin: 0 }}>
            {form.getFieldDecorator(dataIndex, {
            rules: [
                {
                required: true,
                message: `${title} is required.`,
                },
            ],
            initialValue: record[dataIndex],
            })(<Input ref={node => (input = node)} onPressEnter={save} onBlur={save} />)}
        </Form.Item>
        ) : (
        <div
            className="editable-cell-value-wrap"
            style={{ paddingRight: 24 }}
            onClick={toggleEdit}
        >
            {children}
        </div>
        );

    }
    
    const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        children,
        ...restProps
      }:any = props;
    useEffect(()=>{
        if (editing) {
            input.focus();
        }
    },[editing])

    return ( 
        <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
}






const Content: React.FC= () => {
    // //解决头条数据无法被sessionStorage初始化的问题
    // if (getStorage(0)!== undefined) {
    //   const action = {
    //     type:"bug_bug",
    //     value:getStorage(0)
    //   }
    //   store.dispatch(action)
    // }
    let big_key = store.getState().admin //每个模块对应的key (表格头部字段内容)
    let Big:any = store.getState().content //获取redux中的内容列表
    const [dataSource , setData] = useState<any>(Big[big_key]) //默认初始化进入admin后显示的是key为0时的表格结构
    const [count , setCount] = useState<any>(1)
    const [columnsx , setColu] = useState<any>(obj.content[0])
    //每次更新状态（即 ）
    const changeM = () =>{
      
        big_key = store.getState().admin
        // getStorage(big_key)

        Big = store.getState().content
        setStorage(big_key,JSON.stringify(Big[big_key]))
        setColu(obj.content[big_key])
        setData(Big[big_key])
    }
    store.subscribe(changeM)
    let columns:any = [
        ...columnsx, //------------------------------------------------------------------
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (text:any, record:any) =>
            dataSource.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a href="javascript:;">Delete</a>
              </Popconfirm>
            ) : null,
        },
    ];

    const handleDelete =( key:any ) =>{
        const dataSources = [...dataSource];
        let content = dataSources.filter(item => item.key !== key)
        const action1 = {
          type:"delete",
          key:big_key+"-"+key
        }
        store.dispatch(action1)
        const action = {
          type:"change_content",
          value:big_key,
          content:content
        }
        store.dispatch(action)
    }

    const handleAdd = () =>{
        const counts = count
        const dataSources = dataSource
        const newData = {
            key: counts
        };
        let content = [...dataSources, newData]
        const action1 = {
          type:"add",
          key:newData.key+"-"+big_key
        }
        store.dispatch(action1)
        const action = {
          type:"change_content",
          value:big_key,
          content:content
        }
        store.dispatch(action)
        setCount(counts+1)
        setStorage("count",counts+1)
    }
    
    const handleSave = (row:any) =>{
        const newData = [...dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
        ...item,
        ...row,
        });
        const action = {
          type:"change_content",
          value:big_key,
          content:newData
        }
        store.dispatch(action)
    }

    const  dataSources = dataSource;

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columnss = columns.map( (col:any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record:any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: handleSave,
        }),
      };
    });

    //--------------------------------------

    useEffect(()=>{
      if (getStorage("count")!==null) {
        setCount(Number(getStorage("count")))
      }
    })
    //--------------------------------------

    return ( 
        <div className="t_content">
          <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
            Add a row
          </Button>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSources}
            columns={columnss}
          />
        </div>
    );
}

export default Content;
