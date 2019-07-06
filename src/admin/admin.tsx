import React from 'react';
import Header from '../components/header/header'
import Left from '../components/left/left'
import Content from '../components/content/content'
import './admin.less';

const App: React.FC= () => {
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
          <Content />
        </div>

      </div>
    </div>
  );
}

export default App;
