<div id="footer-wp">
    <div id="foot-body">
        <div class="wp-inner clearfix">
            <div class="block" id="info-company">
                <h3 class="title">DatViet Electronics</h3>
                <p class="desc">DatViet Electronics luôn cung cấp luôn là sản phẩm chính hãng có thông tin rõ ràng, chính sách ưu
                    đãi cực lớn cho khách hàng đăng ký thành viên.</p>
                <div id="payment">
                    <div class="thumb">
                        <img src="{{ url('/client/images/img-foot.png') }}" alt="">
                    </div>
                </div>
            </div>
            <div class="block menu-ft" id="info-shop">
                <h3 class="title">Thông tin cửa hàng</h3>
                <ul class="list-item">
                    <li>
                        <p>Cầu Giấy - Hà Nội</p>
                    </li>
                    <li>
                        <p>0987.654.321 - 0989.989.989</p>
                    </li>
                    <li>
                        <p>datviet.electronics@gmail.com</p>
                    </li>
                </ul>
            </div>
            {{-- <div class="block menu-ft policy" id="info-shop">
                <h3 class="title">Chính sách mua hàng</h3>
                <ul class="list-item">
                    <li>
                        <a href="/2-quy-trinh-giao-dich.html" title="">Quy định - chính sách</a>
                    </li>
                    <li>
                        <a href="/1-chinh-sach-bao-hanh.html" title="">Chính sách bảo hành - đổi trả</a>
                    </li>
                    <li>
                        <a href="/4-chinh-sach-hoi-vien.html" title="">Chính sách hội viên</a>
                    </li>
                    <li>
                        <a href="/4-chinh-sach-giao-hang-lap-dat.html" title="">Giao hàng - lắp đặt</a>
                    </li>
                </ul>
            </div> --}}
            <div class="block" id="newfeed">
                <h3 class="title">Bảng tin</h3>
                <p class="desc">Đăng ký với chung tôi để nhận được thông tin ưu đãi sớm nhất</p>
                <div id="form-reg">
                    <form method="POST" action="javascript:;">
                        @csrf
                        <input type="email" name="email" id="email" class="email-reg"
                            placeholder="Nhập email tại đây">
                        <button type="submit" id="sm-reg">Đăng ký</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="foot-bot">
        <div class="wp-inner">
            <p id="copyright">© Bản quyền thuộc về DatViet Electronics</p>
        </div>
    </div>
</div>
<div id="menu-respon">
    <a href="?page=home" title="" class="logo">DatViet</a>
    <div id="menu-respon-wp">
        <ul class="" id="main-menu-respon">
            <li>
                <a href="?page=home" title>Trang chủ</a>
            </li>
            <li>
                <a href="?page=category_product" title>Điện thoại</a>
                <ul class="sub-menu">
                    <li>
                        <a href="?page=category_product" title="">Iphone</a>
                    </li>
                    <li>
                        <a href="?page=category_product" title="">Samsung</a>
                        <ul class="sub-menu">
                            <li>
                                <a href="?page=category_product" title="">Iphone X</a>
                            </li>
                            <li>
                                <a href="?page=category_product" title="">Iphone 8</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="?page=category_product" title="">Nokia</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="?page=category_product" title>Máy tính bảng</a>
            </li>
            <li>
                <a href="?page=category_product" title>Laptop</a>
            </li>
            <li>
                <a href="?page=category_product" title>Đồ dùng sinh hoạt</a>
            </li>
            <li>
                <a href="?page=blog" title>Blog</a>
            </li>
            <li>
                <a href="#" title>Liên hệ</a>
            </li>
        </ul>
    </div>
</div>
<div id="btn-top"><img src="{{ url('/client/images/icon-to-top.png') }}" alt="" /></div>
<div id="fb-root"></div>
