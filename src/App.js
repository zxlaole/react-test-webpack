import React from 'react';
import './App.css';

import ReactTable from './ReactTable';
import ReactInput from './ReactInput';

import {sayHello, getName} from 'test-node-miles0';

// const dataSource  = [
//   {
//       name: '张三',
//       age: 18,
//       address: 'XXXXX大街',
//       company: 'XX公司1'
//   },{
//       name: '李四',
//       age: 21,
//       address: 'XXXXX街道',
//       company: 'XX公司2'
//   }
// ];

const columns = [
  {
      id: 1,
      title: '姓名',
      dataIndex: 'name'
  },
  {
      id: 2,
      title: '年龄',
      dataIndex: 'age'
  },
  {
      id: 3,
      title: '地址',
      dataIndex: 'address'
  },
  {
      id: 4,
      title: '公司',
      dataIndex: 'company'
  },
]

function generate(){
  const name1List = ['张', '王', '李', '赵', '刘'];
  const name2List = ['在', '爱', '遥', '遥', '是'];
  const userList = [];
  let i = 1;
  while(i<=20){
    const name1 = name1List[(Math.floor(Math.random()*5))];
    const name2 = name2List[(Math.floor(Math.random()*5))];
    const name3 = name2List[(Math.floor(Math.random()*5))];
    userList.push([name1, name2, name3].join(''))
    i++;
  }
  console.log(userList)
}
class App extends React.Component {
  
  constructor(props){
    super(props);
    const dataSource = [];
    for(let i = 1; i <= 20; i++){
      dataSource.push({
        name: getName({}),
        age: 20 + i,
        address: `XXXXX街道${i}`,
        company: `XX公司${i}`
      });
    }
    this.state = {
      value: '',
      dataSource
    }
    generate();
  }
  onSearch = (e) => {
    this.setState({
      value: e
    });
  }

  render() {
    const {dataSource} = this.state;
    return (
      <div>
        <ReactInput onSearch={this.onSearch} />
        <ReactTable dataSource={dataSource} columns={columns} search={this.state.value}/>
      </div>
    );
  }
}

export default App;
