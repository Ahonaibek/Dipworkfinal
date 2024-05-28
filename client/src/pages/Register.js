import React from 'react';
import { Col, Input, Row, Form, message } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
import Spinner from '../components/Spinner';

function Register() {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alertsReducer);

    function onFinish(values) {
        if (values.password === values.cpassword) {
            dispatch(userRegister(values))
        }
        else {
            message.error('please check your password')
        }
        console.log(values)
    }

    return (
        <div className="login">
            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center'>

                <Col lg={16} style={{ position: 'relative' }}>
                    <img className='w-100' data-aos='slide-left' data-aos-duration='1500' src="https://hdpic.club/uploads/posts/2021-11/1637614298_23-hdpic-club-p-tesla-fon-24.png" alt="carimg" />
                    {/* <img className='w-100' data-aos='slide-left' data-aos-duration='1500' src="https://images.pexels.com/photos/1008659/pexels-photo-1008659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                    <h1 className='login-logo'>CAR SHARE</h1>
                </Col>
                <Col lg={8} className="text-left p-5">
                    <Form layout='vertical' className="login-form p-5" onFinish={onFinish}>
                        <h1>Register</h1>
                        <hr />
                        <Form.Item name='username' label="Username" rules={[{ required: true }]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name='password' label="Password" rules={[{ required: true }]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name='cpassword' label="Confirm Password" rules={[{ required: true }]} >
                            <Input />
                        </Form.Item>

                        <button className='btn1 mt-2'>Register</button>
                        <hr />

                        <Link to='/login'>Click here to Login</Link>

                    </Form>
                </Col>

            </Row>
        </div>

    )
}

export default Register
