import React from "react";
import "./footer.css";
import logoHeader from "../../image/logoHeader.png"

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="mid-footer">
                    <div className="container" style={{marginTop: "10px"}}>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 ft-info col-footer">

                                <a href="/" className="logo-ft" title="Logo">
                                    <img width="220" height="27"
                                         src={logoHeader}
                                         alt="Gấu Shop"/>
                                </a>
                                <div className="content-ft">
                                    Hamster xâm chiếm tâm trí bạn. Bạn sẽ đổ gục trước sự vô tri của lũ Hamster này.
                                </div>
                                <h4 className="title-menus">
                                    Hình thức thanh toán
                                </h4>
                                <ul className="thanhtoan">

                                    <li><img width="57" height="35" alt="Payment 1"
                                             data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_1.png?1686556941849"
                                             className="lazyload loaded"
                                             src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_1.png?1686556941849"
                                             data-was-processed="true"/></li>
                                    <li><img width="57" height="35" alt="Payment 2"
                                             data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_2.png?1686556941849"
                                             className="lazyload loaded"
                                             src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_2.png?1686556941849"
                                             data-was-processed="true"/></li>
                                    <li><img width="57" height="35" alt="Payment 3"
                                             data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_3.png?1686556941849"
                                             className="lazyload loaded"
                                             src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_3.png?1686556941849"
                                             data-was-processed="true"/></li>

                                </ul>

                            </div>
                            <div className="col-12 col-md-6 col-lg-2 link-list col-footer">
                                <h4 className="title-menu title-menu2">
                                    Chính sách
                                </h4>
                                <ul className="list-menu">

                                    <li><a href="/chinh-sach-thanh-vien" title="Chính sách thành viên">Chính sách thành
                                        viên</a></li>

                                    <li><a href="/chinh-sach-thanh-toan" title="Chính sách thanh toán">Chính sách thanh
                                        toán</a></li>

                                    <li><a href="/huong-dan-mua-hang" title="Hướng dẫn mua hàng">Hướng dẫn mua hàng</a>
                                    </li>

                                    <li><a href="/bao-mat-thong-tin-ca-nhan" title="Bảo mật thông tin cá nhân">Bảo mật
                                        thông tin cá nhân</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 link-list col-footer ">
                                <h4 className="title-menu title-menu2">
                                    Thông tin chung
                                </h4>
                                <div className="group-address">
                                    <ul>
                                        <li><b>Địa chỉ: </b><span>

								280 Trần Hưng Đạo, Đà Nẵng

								</span></li>
                                        <li>
                                            <b>Điện thoại: </b><a title="1900 6750" href="tel:19006750">0333333333</a>
                                        </li>
                                        <li>
                                            <b>Email: </b><a title="support@sapo.vn"
                                                             href="mailto:support@sapo.vn">hamster@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="title-menu">
                                    Mạng xã hội
                                </h4>

                                <ul className="social">
                                    <li><a href="#" title="Zalo"><img width="32" height="32" title="Zalo"
                                                                      className="lazyload loaded"
                                                                      src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/zalo.png?1686556941849"
                                                                      data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/zalo.png?1686556941849"
                                                                      data-was-processed="true"/></a></li>
                                    <li><a href="#" title="Facebook"><img width="32" height="32" title="Facebook"
                                                                          className="lazyload loaded"
                                                                          src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/facebook.png?1686556941849"
                                                                          data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/facebook.png?1686556941849"
                                                                          data-was-processed="true"/></a></li>
                                    <li><a href="#" title="Youtube"><img width="32" height="32" title="Youtube"
                                                                         className="lazyload loaded"
                                                                         src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/youtube.png?1686556941849"
                                                                         data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/youtube.png?1686556941849"
                                                                         data-was-processed="true"/></a></li>
                                    <li><a href="#" title="Google"><img width="32" height="32" title="Google"
                                                                        className="lazyload loaded"
                                                                        src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/google.png?1686556941849"
                                                                        data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/google.png?1686556941849"
                                                                        data-was-processed="true"/></a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <img src="https://images.kienthuc.net.vn/zoom/800/uploaded/hongngan/2015_09_18/a/nhung-khoanh-khac-cuc-dang-yeu-cua-chuot-hamster.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}