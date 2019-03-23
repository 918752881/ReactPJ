import React ,{Component} from "react"
import { Card,Table,Button,Popconfirm,Pagination} from 'antd';
import "./goods.less"
import dataSource from "./goodsdata"

class Goods extends Component{
    constructor(props){
        super(props)
        this.state={
            dataSource:dataSource.dataSource
        }    
        this.columns=[{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },{
              title:"头像",
              dataIndex:"img",
              key:"img",
                render:(data)=>{
                    return (
                        <img  alt="" src={data} style={{ width: 20 }}></img>
                    )
                }
          },
          {
              title:"操作",
              dataIndex:"key",
              key:"key",
              render:(index)=>{
                 // console.log(data)
                return (
                    <div>
                        <Popconfirm title="确定删除吗" onConfirm={this.del.bind(this,index)}  okText="确定" cancelText="取消">
                            <Button size="small" type="danger">删除</Button>
                        </Popconfirm>  
                        <Button size="small">修改</Button>
                    </div>
                )
              }
          }]
    }
    del(index){  
        alert(index)
        let arr=this.state.dataSource;
        arr.splice(index/1-1,1)
        this.setState({
            dataSource:arr
        })
    }
    onChange(page, pageSize){
        console.log(page, pageSize)
    }
    componentWillMount(){
        //console.log(this.state.dataSource)
    }
    render(){
        return (
            <div>
                <Card>
                <Table dataSource={this.state.dataSource} columns={this.columns} />
                <Pagination simple defaultCurrent={2} total={50} onChange={this.onChange}/>

                </Card>
            </div>
        )
    }
}
export default Goods