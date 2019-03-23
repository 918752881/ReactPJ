import React,{Component} from "react";
import { Row, Col } from 'antd';
import NavLeft from "../../components/NavLeft/NavLeft"
import "./admin.less";
class Admin extends Component{
    render(){
        console.log(this)
        return (
            <div >
                <Row className="admin">
                    <Col className="left" span={5}>
                    <NavLeft></NavLeft>
                    </Col>
                    <Col className="right" span={19}>
                        <Row>
                            <Col span={24} className="top">顶部</Col>
                        </Row>
                        <Row>
                            <Col span={24} className="center">
                            {this.props.children}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className="foot">底部</Col>
                        </Row>   
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Admin;