import "./login.css"
import React, {useEffect} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginAcc} from "../../service/LoginService";
import {useNavigate} from "react-router";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import background from "../../image/background.jpg"


export function Login() {
    const navigate = useNavigate()

    function setWithExpiry(key, value, expiryMinutes) {
        const now = new Date();
        const expiry = new Date(now.getTime() + expiryMinutes * 60000);
        const item = {
            ...value,
            expiry: expiry.getTime()
        };
        localStorage.setItem(key, JSON.stringify(item));
        console.log("ưewe",value)
    }

    useEffect(() => {
        document.title = "Đăng nhập";
    }, []);


    return (
        <>
            <Header/>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                onSubmit={values => {
                    const login = async () => {
                        const result = await loginAcc(values);
                        console.log(result)
                        // setWithExpiry("formLogin",values,1440)
                        localStorage.setItem("token", result.token)
                        localStorage.setItem("username", result.username)
                        localStorage.setItem("role", result.role)
                        navigate("/")
                    }
                    login()
                }}
            >
                <Form>
                    <div className="bodywrap" style={{
                        backgroundImage: `url(${background})`,
                        marginBottom: "-3.1rem"
                    }}>
                        <section className="bread-crumb">
                            <div className="container">
                                <div className="title-bread-crumb" style={{color: "#663399"}}> Đăng nhập tài khoản</div>
                            </div>
                        </section>
                        <section className="section">
                            <div className="container">
                                <div className="wrap_background_aside page_login">
                                    <div className="row">
                                        <div style={{margin: "auto"}}
                                             className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3 ">
                                            <div style={{background: "#fff", borderRadius: "5px"}}
                                                 className="row no-margin align-items-center">
                                                <div className="page-login pagecustome clearfix no-padding" style={{height: "25rem"}}>
                                                    <div className="wpx">
                                                        <ul className="auth-block__menu-list" style={{marginTop: "2rem"}}>
                                                            <li className="active">
                                                                <h1 className="title_heads a-center">
                                                                    <span>Đăng nhập</span>
                                                                </h1>
                                                            </li>
                                                        </ul>

                                                        <div id="login" className="section" style={{marginTop: "2rem"}}>
                                                            <div className="form-signup clearfix"
                                                                 style={{marginTop: "18px"}}>
                                                                <div className="form-group">
                                                                    <Field type="text"
                                                                           className="form-control form-control-lg"
                                                                           name="username"
                                                                           placeholder="Tài khoản"
                                                                    />
                                                                </div>
                                                                <div className="form-group" style={{marginTop: "1.5rem"}}>
                                                                    <Field type="password"
                                                                           className="form-control form-control-lg"
                                                                           name="password"
                                                                           placeholder="Mật khẩu"
                                                                    />
                                                                </div>
                                                                <div className="pull-xs-left" style={{marginTop: "1.5rem"}}>
                                                                    <input className="btn btn-style btn_50"
                                                                           type="submit"
                                                                           value="Đăng nhập"/>
                                                                    <a href="#"
                                                                        className="block a-center quenmk" style={{marginTop: "1.5rem"}}>Quên mật khẩu</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Form>

            </Formik>
            <Footer/>
        </>
    )
}