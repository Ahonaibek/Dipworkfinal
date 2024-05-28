import React from 'react';
import { Col, Input, Row, Form } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';
import Spinner from '../components/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function Login() {

    const { loading } = useSelector(state => state.alertsReducer)
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(userLogin(values))
        console.log(values)
    }
    return (
        <div className="login">
            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center'>

                <Col lg={16} style={{ position: 'relative' }}>
                    <img className='w-100' data-aos='slide-right' data-aos-duration='1500' src="https://hdpic.club/uploads/posts/2021-11/1637614298_23-hdpic-club-p-tesla-fon-24.png" alt="carimg" />
                    {/* <img className='w-100' data-aos='slide-left' data-aos-duration='1500' src="https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                    {/* <img className='w-100' data-aos='slide-left' data-aos-duration='1500' src="https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                    <h1 className='login-logo'>CAR SHARE</h1>
                </Col>
                <Col lg={8} className="text-left p-5">
                    <Form layout='vertical' className="login-form p-5" onFinish={onFinish}>
                        <h1>Login</h1>
                        <hr />
                        <Form.Item name='username' label="Username" rules={[{ required: true }]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name='password' label="Password" rules={[{ required: true }]} >
                            <Input />
                        </Form.Item>

                        <button className='btn1 mt-2'>Login</button>

                        <hr />
                        <Link to='/register'>Click here to Register</Link>


                    </Form>
                </Col>

            </Row>
        </div>

    )
}

export default Login
