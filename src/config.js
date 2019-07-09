const obj = {
    //左边导航内容
    sub:[
        ["sub1","mail","Part One",[

            [0,"班级"],
            [1,"水果"]

        ]],
        ["sub2","appstore","Part Two",[

            [2,"工单"],

        ]]
    ],

    //表格内容
    content:[
        [   
            {
              title: '姓名',
              dataIndex: '姓名',
              width: '30%',
              editable: true,
            },
            {
              title: '年龄',
              dataIndex: '年龄',
              editable: true,
            },
            {
              title: '学号',
              dataIndex: '学号',
              editable: true,
            }
        ],

        [   
            {
              title: '果名',
              dataIndex: '果名',
              width: '20%',
              editable: true,
            },
            {
              title: '大小',
              dataIndex: '大小',
              editable: true,
            },
            {
              title: '价格',
              dataIndex: '价格',
              editable: true,
            }
        ],

        [   
            {
              title: '名称',
              dataIndex: '名称',
              width: '20%',
              editable: true,
            },
            {
              title: '价格',
              dataIndex: '价格',
              editable: true,
            }
            
        ]

       

    ]
} 
export default obj