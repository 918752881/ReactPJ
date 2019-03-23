import "./NavLeft.less"
import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import { Menu, Icon } from 'antd';
import dataMenu from "./rootMenu"
const SubMenu = Menu.SubMenu;
//console.log(dataMenu.dataMenu)
class NavLeft extends Component{
    jump(path){
        //console.log(this,path)
        this.props.history.push(path)
    }
    renderMenu(data){
        return data.map((item,index)=>{
                if(item.children){
                 return <SubMenu key={item.id} title={<span><Icon type={item.type} /><span>{item.name}</span></span>}>
                         {this.renderMenu(item.children)}
                </SubMenu>
                }else{
                    return  <Menu.Item key={item.id} onClick={this.jump.bind(this,item.path)}>
                                <span><Icon type={item.type} /><span>{item.name}</span></span>
                            </Menu.Item>
                }
        })

    }
    render(){
        return (
            <div>               
  <Menu mode="inline" theme="dark">
            {this.renderMenu(dataMenu.dataMenu)}
        {/* <Menu.Item key="1">
            <span><Icon type="appstore" /><span>首页</span></span>
        </Menu.Item>
      <SubMenu key="3" title={<span><Icon type="mail" /><span>图标展示</span></span>}>
          <Menu.Item key="31">柱状图</Menu.Item>
          <Menu.Item key="32">饼状图</Menu.Item>      
        </SubMenu> */}
  </Menu>
            </div>
        )
    }
}
export default withRouter(NavLeft)
