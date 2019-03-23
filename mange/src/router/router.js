import React,{Component,Fragment} from "react"
import {HashRouter,Route,Redirect,Switch} from "react-router-dom";
import Login from "../pages/login/login"
import Admin from "../pages/admin/admin"
import Goods from "../pages/goods/goods"
import App from '../App';
class router extends Component{
    render(){
        return (
            <Fragment>
                <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from="/" to="/login"></Redirect>
                        <Route path="/login" render={
                            ()=>{
                                return <Login></Login>
                            }
                        }></Route>
                        <Route path="/admin" render={()=>{
                                return <Admin>
                                    <Switch>
                                   <Redirect exact from="/admin" to="/admin/home"></Redirect>
                                    <Route path="/admin/home" render={()=>{
                                            return ( <div>首页</div>)
                                    }}></Route>
                                    <Route path="/admin/setting/add" render={()=>{
                                        return (<div>添加</div>)                      
                                    }}></Route> 
                                    <Route path="/admin/goods" render={()=>{
                                            return ( <Fragment>
                                                <Goods>
                                                    
                                                </Goods>
                                                </Fragment>)
                                    }}></Route>
                                    </Switch>
                                </Admin>
                            }}            
                        ></Route>
                    </Switch>
                </HashRouter> 
                </App>
            </Fragment>
        )
    }
}
export default router