# X-admin
基于React（hook）+Typescript+antd的后台管理系统的脚手架，只需配置文件即可

效果预览地址:
- [点击这里](http://www.xingwenpeng.cn:8010/)

2019-06-24  
 
    > * 添加项目整体目录完成 
 
2019-07-06  
 
    > * 实践react hook搭配antd（Ts写法）
    
    > * 添加配置文件config.js，实现配置文件实现动态增加左侧导航功能
 
2019-07-08  
 
    > * 基本完成脚手架（后续进行完善）

2019-07-09

- [x] 功能已全部实现
- [x] 暴露接口

2019-07-12

- [ ] 反馈有bug，解决中

------
**框架使用：**

环境要求：

> * node版本 10+
> * npm版本 6+

```javascript
1.首先git clone下来
2.使用脚手架目录打开cmd，输入命令npm install（如果失败请使用管理员权限打开cmd）
3.在命令行中输入npm start
```

打开界面：![cmd-markdown-logo](http://i1.cy.com/x/jiemian.jpg)

红色框框处使我们第一个需要配置的地方：

    1.打开src目录下面的config.js
    2.进行配置：
    
![cmd-markdown-logo](http://i1.cy.com/x/peizhi.png)
    
    sub对应的为为左侧导航。content为导航所对应的表格字段
    
    白色箭头所指数组的前三个元素分别对应导航key值，导航的图标，以及导航的名称。
    
    数组第四个元素为数组，对应为导航子元素的key值以及子元素的名称。
    
    注意：每次添加完子元素时。都要在下面content数组中对应的key值中添加相应的表格字段，比如班级的ke     y为0，那就在content数组中0位置添加表格字段。
    
    表格字段可选width，title，以及是否可以被编辑editable
    
---- 

    1.都设置完成后打开界面
![cmd-markdown-logo](http://i1.cy.com/x/zhanshi.png)

    2. 如下图可以添加表格内容，删除内容，直接点击空表格进行编辑（刷新页面不会使数据丢失）
    
![cmd-markdown-logo](http://i1.cy.com/x/shanchu.png)

    3.在admin.tsx中暴露新增数据与删除数据的接口，删除元素为子导航的key+被删除数据的key，添加为被删除数据的key+子导航的key。
    
![cmd-markdown-logo](http://i1.cy.com/x/jiekou.png)

----

总结：框架还在完善中，有很多需要完善的地方，框架扩展性比较强。都看到这里了，大佬点个start吧
![cmd-markdown-logo](http://i1.cy.com/x/kule.png)
