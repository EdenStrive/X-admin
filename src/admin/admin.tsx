import React, { useState } from 'react';
import Header from '../components/header/header'
import Left from '../components/left/left'
import store from '../store/index'
import Content from '../components/content/content'
import './admin.less';

const App: React.FC= () => {
  const [welcome, setWelco] = useState<boolean>(false)

  const viewTable = ()=>{
    setWelco(true)
    console.log("最后删除的元素为:",store.getState().delete)
    console.log("最后添加的元素为:",store.getState().add)
  }

  store.subscribe(viewTable)

  return ( 
    <div className = "father">
      {/* 后台管理头部 */}
      <div className="headers">
        <Header />
      </div>

      {/* 后台管理底部 */}
      <div className="bodys">
        
        {/* body左导航 */}
        <div className="left">
          <Left />
        </div>

        {/* 内容 */}
        <div className="right">

          {welcome ? <Content /> : <p className="xxx">点击左侧导航进行每个表格的新增、编辑与删除</p>}
        </div>

      </div>
    </div>
  );
}

export default App;
