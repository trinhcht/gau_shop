import React, {useEffect} from "react";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import Banner from "../../image/Banner-1.jpg";

export function Introduce() {
    useEffect(() => {
        document.title = "Giới thiệu"
    }, [])
    return (
        <>
            <Header/>
            <div className="bodywrap" style={{marginTop: "8rem"}}>
                <section className="bread-crumb"
                         style={{
                             backgroundImage: `url(${Banner})`
                         }}>
                    <div className="container">
                        <div className="title-bread-crumb" style={{color: "rgb(0,0,255)"}}>
                            Giới thiệu
                        </div>
                    </div>
                </section>
                <section className="page">
                    <div className="container">
                        <div className="pg_page padding-top-15">
                            <div className="row">
                                <div className="col-12">
                                    <div className="content-page rte">
                                        <h3><strong>Cùng tìm hiểu về Hamster</strong></h3>
                                        <p>Ngày nay việc sắm cho mình một bé PET xinh xắn và dễ thương đang là xu hướng
                                            của rất nhiều người.
                                            Trong đó bé Hamster cũng là một trong những lựa chọn hợp lý bởi sự dễ thương
                                            và hình dáng nhỏ nhắn.
                                        </p>
                                        <h3><strong>Hamster là gì</strong></h3>
                                        <p>Hamster được dịch theo từ điển nghĩa là “chuột hang” hay còn hiểu đó là loài
                                            chuột cụt đuôi thuộc dòng động vật gặm nhấm. Hamster không phải thuộc dòng
                                            giống chuột đồng, chuột cống, chuột nhắt… chuyên đi hại mùa màng của bà con
                                            nông dân mà còn mang nhiều mầm bệnh. Hamster là loài chuột sinh sống ngoài
                                            tự nhiên thường có tập tính đào hang để đuổi bắt côn trùng.
                                            Chuột hamster được tìm thấy vào năm 1829 và được các nhà thí nghiệm sử dụng
                                            để nghiên cứu các thí nghiệm khoa học. Sau nhiều năm do tác động của môi
                                            trường và sự lai tạp di truyền, chuột hamster dần dần tương tác gần gũi với
                                            con người. Với sự thông minh và tính gọn gàng trong lối sống của hamster
                                            chúng dần trở thành một bé pet dễ thương được nhiều người tìm hiểu để chọn
                                            mua.
                                        </p>
                                        <h3><strong>Tập tính chuột hamster</strong></h3>
                                        <p>Để giúp thú cưng của mình phát triển tốt và hạn chế các bệnh thường gặp thì
                                            việc tìm hiểu những tập tính của mỗi pet không thể bỏ qua. Nắm chắc được
                                            những tập tính của chuột hamster thì bạn có thể giúp chúng phát triển toàn
                                            diện khi chăm sóc chúng.
                                        </p>
                                        <img src="https://meohaychoban.com/wp-content/uploads/2021/05/hamster-bear-mau-vang.jpg"
                                             style={{display: "block",
                                            margin: "0 auto"}}/>
                                        <h3><strong>Đặc điểm kích thước</strong></h3>
                                        <p>Chuột hamster có kích thước rất hạn chế kích thước phổ biến của dòng hamster
                                            khi trưởng thành giao động từ 5cm đến 13cm. Hamster khác hẳn với những giống
                                            chuột gặm nhấm khác ở điểm đuôi rất ngắn ở nhiều loài hamster bị cụt đuôi,
                                            phần tai và chân cũng có kích thước nhỏ hơn chuột đồng, chuột nhắt rất
                                            nhiều. Điểm đáng yêu nhất của hamster chính là ở bộ lông bóng mượt bao trùm
                                            khắp cơ thể và màu sắc đa dạng như: trắng, đen, xám, vàng, trắng tuyền. Kết
                                            hợp thân hình mập 2 má phình lên để dự trữ thức ăn. Tuổi đời của mỗi chú
                                            chuột hamster khoảng 2-3 năm tuổi, về cân nặng ở độ tuổi trưởng thành từ
                                            25g – 45g. Thời gian mang thai của chuột hamster từ 18-22 ngày. Và mỗi lần
                                            sinh sản khoảng 7-10 chuột con.</p>
                                        <h3><strong>Môi trường sống</strong></h3>
                                        <p>Hamster với tập tính sống thường thiên về hoạt động vào ban đêm và ngủ ngày.
                                            Chính vì vậy khi ban ngày bạn có thể thấy chúng lười vận động không phải do
                                            lười biếng mà đó là tập tính của loài. Về nguồn gốc của chuột hamster là
                                            loài chuột ở hoang mạc và bán hoang mạc và tập tích thích đào hang để ấn náu
                                            với những độ sâu hang lên đến 0.7 m. Với mục đích trú ấn và tránh được những
                                            khí hậu khắc nghiệt.</p>
                                        <h3><strong>Thói quen</strong></h3>
                                        <p>Ở hamster có một thói quen đó là dự trữ thức ăn ở vùng hai túi má, vì vậy
                                            nhiều người khi mới tìm hiểu về hamster sẽ lầm tưởng rằng chúng tham ăn. Đa
                                            số loài hamster có thói quen sống bày đàn, nhưng ở một số ít thì chúng lại
                                            có tập tính bảo vệ lãnh thổ chúng sẵn sàng chiến đầu khi bị đối thủ xâm
                                            chiếm lãnh thổ của mình.</p>
                                        <img src="https://meohaychoban.com/wp-content/uploads/2021/05/hamster-mau-tam-the.jpg"
                                             style={{display: "block",
                                                 margin: "0 auto"}}/>
                                        <h3><strong>Cách chăm sóc chuột hamster</strong></h3>
                                        <p>Chăm sóc chuột hamster không hề khó nhưng cái quan trọng bạn cần nắm được
                                            những kiến thức cơ bản sẽ giúp bé hamster phát triển tốt nhất và toàn diện
                                            nhất. Giảm nguy cơ mắc các bệnh ảnh hưởng đến sức khỏe. Điều quan trọng cần
                                            biết nhất đó là thức ăn, đồ uống và nơi ở của hamster.</p>
                                        <h3><strong>Thức ăn</strong></h3>
                                        <p>Hamster là động vật ăn tạp, ở hoang giã thức ăn chủ yếu của chúng là ruồi,
                                            muỗi, sâu bọ. Dần dần theo thời gian được thuần hóa thức ăn của hamster có
                                            thể ăn các loại hạt, rau củ quả, hướng dương, lạc, hạt điều. Thậm chí các
                                            loại bánh ngọt, bánh mặn.. Nhìn chung, thức ăn cho hamster rất dễ kiếm và
                                            không mất quá nhiều chi phí.  Lưu ý không nên cho hamster ăn thịt hay các
                                            loại hạt có vị thịt bởi sẽ khiến hamster trở nên hung hăng ăn thịt các đồng
                                            loại cùng chuồng.</p>
                                        <h3><strong>Đồ uống</strong></h3>
                                        <p>Trong thức ăn rau củ quả cũng cung cấp một lượng nước nhất định cho chúng.
                                            Ngoài ra bạn vẫn cần phải bổ súng thêm nước uống cho hamster cần đảm bảo
                                            nước đun sôi để nguội để đảm bảo an toàn cho hệ tiêu hóa. Đảm bảo lúc nào
                                            cũng có nước cung cấp cho hamster.</p>
                                        <img src="https://meohaychoban.com/wp-content/uploads/2021/05/hamster-campell-mau-soc-xam.jpg"
                                             style={{display: "block",
                                                 margin: "0 auto"}}/>
                                        <h3><strong>Chuồng ở</strong></h3>
                                        <p>Chuồng nuôi dành cho chuột hamster vẫn đảm bảo hàng rào che chắn tốt để đảm
                                            bảo hamster không thoát ra ngoài và tránh các động vật khác làm hại đến
                                            chúng. Các loại chất lồng bạn có thể tham khảo như: lồng sắt, lồng nhựa,
                                            lồng kính mica. Sử dụng kết hợp các loại lót chuồng bẵng mùn gỗ hoặc xé vụn
                                            giấy để đảm bảo vệ sinh năng ngừa vi khuẩn ẩn nấp gây bệnh cho hamster</p>
                                        <h3><strong>Các loại Hamster</strong></h3>
                                        <p>Hamster có rất nhiều loài khác nhau mỗi loài mang những nét riêng về màu sắc,
                                            khối lượng và đôi khi khác nhau cả tập tính. Trên thị trường Việt Nam hiện
                                            nay có 4 loại hamster phổ biến và được nhiều người tìm mua: Hamster Bear,
                                            Hamster Winter White, Hamster Campbell, Hamster Roborovski.</p>
                                        <img src="https://meohaychoban.com/wp-content/uploads/2021/05/hamster-campell-mau-bo-sua-den.jpg"
                                             style={{display: "block",
                                                 margin: "0 auto"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}