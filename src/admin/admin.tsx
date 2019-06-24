import React from 'react';
import './admin.less';

const App: React.FC= () => {

  return ( 
    <div className = "father">
      {/* 后台管理头部 */}
      <div className="headers"></div>
      {/* 后台管理底部 */}
      <div className="bodys">
        {/* body左导航 */}
        <div className="left"></div>
        {/* 内容 */}
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
