import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {findByUserName} from "../../service/CustomerService";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

export function Information() {
    const username=localStorage.getItem("username")
    const [customer, setCustomer] = useState({})
    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await findByUserName(username)
            setCustomer(result1)
        }
        fetchApi()
    }, [])
    useEffect(()=>{
        document.title="Thông tin cá nhân"
    },[])

    return (
        <>
            <Header/>
            <div className="container" style={{margin: "50px auto"}}>
                <div className="row">
                    <i className="bi bi-list menu d-none" onClick="openNav()"/>
                    <div className="col-3 side-bar">
                        <h2 style={{fontSize: 24, color: "#663399"}} className="text-center mt-3">
                            Quản lý tài khoản
                        </h2>
                        <p className="text-center flex-column">
                            <img
                                src={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2cDTwZHbsTigF0ykhEdv2iXfTGKMpvfmYQ&usqp=CAU"
                                }
                                className="rounded-circle"
                                style={{width: 100, margin: `0 auto`, border: "1px solid"}}
                                height="100px"
                            />
                        </p>
                        <p style={{fontSize: 25}} className="text-center mt-3">
                            {localStorage.getItem("username")}
                        </p>
                        <div className="mt-3">
                            <button
                                type="button"
                                className="log-out btn btn-success"
                                style={{display: "block", backgroundColor: "#faaee5"}}
                                // onClick={handleLogout}
                            >
                                <i className="bi bi-arrow-right-circle"/>
                                Đăng xuất
                            </button>
                        </div>
                        <hr/>
                        {(
                            <Link
                                to={"/information"}
                                className="mt-2"
                                style={{color: "#663399"}}
                            >
                                <link href="" style={{fontSize: 14}}/>
                                <i className="bi bi-person-bounding-box"/>
                                Thông tin tài khoản
                            </Link>
                        )}
                        <hr/>
                        <Link
                            to={"/history"}
                            className="mt-2"
                            style={{color: "#663399"}}
                        >
                            <link style={{fontSize: 14}}/>
                            <i className="bi bi-calculator"/>
                            Lịch sử
                        </Link>
                    </div>
                    <div style={{marginTop: "0px"}} className=" container mx-auto col-9">
                        <div >
                            <div className="row">
                                <div className="col-md-9" style={{    marginLeft: "10%"}}>
                                    <form method="post" noValidate="" className="formVAT">
                                        <h4 style={{color: "#663399"}}>Thông tin cá nhân</h4>
                                        <div className="r-bill">
                                            <div className="bill-field">
                                                <div className="form-group">
                                                    <label style={{color: "#663399"}}>Họ và tên:</label>
                                                    <input
                                                        type="text"
                                                        value={customer.name}
                                                        disabled
                                                        className="form-control val-f"
                                                        name="attributes[company_name]"
                                                        placeholder="Tên"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{color: "#663399"}}>Email:</label>
                                                    <input
                                                        value={customer.email}
                                                        type="text"
                                                        disabled
                                                        className="form-control val-f val-n"
                                                        name="attributes[tax_code]"
                                                        placeholder="email"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{color: "#663399"}}>Số điện thoại:</label>
                                                    <input
                                                        value={customer.phone}
                                                        type="email"
                                                        disabled
                                                        className="form-control val-f val-email"
                                                        name="attributes[invoice_email]"
                                                        placeholder="số điện thoại"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label style={{color: "#663399"}}>Địa chỉ:</label>
                                                    <textarea
                                                        type="text"
                                                        disabled
                                                        className="form-control val-f"
                                                        name="attributes[company_address]"
                                                        placeholder="địa chỉ nơi ở"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}