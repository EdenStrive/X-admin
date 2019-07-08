const obj = {
    //左边导航内容
    sub:[
        ["sub1","mail","Navigation one",[

            [0,"title one"],
            [1,"option 2"]

        ]],
        ["sub2","appstore","Navigation two",[

            [2,"option 5"],
            [3,"option 6"]

        ]]
    ],

    //表格内容
    content:[
        [   
            {
              title: 'name',
              dataIndex: 'name',
              width: '30%',
              editable: true,
            },
            {
              title: 'age',
              dataIndex: 'age',
              editable: true,
            },
            {
              title: 'address',
              dataIndex: 'address',
              editable: true,
            }
        ],

        [   
            {
              title: 'two',
              dataIndex: 'two',
              width: '20%',
              editable: true,
            },
            {
              title: 'tw-pat',
              dataIndex: 'tw-pat',
              editable: true,
            },
            {
              title: 'three-pat',
              dataIndex: 'three-pat',
              editable: true,
            }
        ],

        [   
            {
              title: 'x',
              dataIndex: 'x',
              width: '20%',
              editable: true,
            },
            {
              title: 'z',
              dataIndex: 'z',
              editable: true,
            },
            {
              title: 'z',
              dataIndex: 'three-pat',
              editable: true,
            }
        ],

        [   
            {
              title: 't',
              dataIndex: 't',
              width: '20%',
              editable: true,
            },
            {
              title: 'y',
              dataIndex: 'y',
              editable: true,
            },
            {
              title: 'u',
              dataIndex: 'u',
              editable: true,
            }
        ],

    ]
} 
export default obj