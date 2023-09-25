import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Footer.module.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Email không được để trống");
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      toast.error(
        "Email đã tồn tại hoặc không đúng định dạng.Vui lòng kiểm tra lại email."
      );
    } else {
      toast.success(
        "Cảm ơn bạn đã đăng ký . Hãy kiểm tra e-mail để xác nhận lại với Graceful,bạn nhé "
      );

      setEmail("");
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.formSubscribe}>
        <h2 className={styles.Title}>Đăng ký nhận bản tin</h2>
        <p className={styles.formSubscribeP}>
          Cùng Graceful Blog cập nhật những thông tin mới nhất về thời trang và
          phong cách sống.
        </p>
        <div className={styles.inputContainer}>
          <TextField
            type="email"
            placeholder="Nhập địa chỉ email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{borderRadius:"none"}}
          />
          <Button
            variant="contained"
            color="error"
        
            className={styles.footerButton}
            onClick={handleSubscribe}
          >
            Đăng ký
          </Button>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/canifa.fanpage/" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/canifa.fashion/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/CANIFAOfficial" target="_blank">
            <YouTubeIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className={`${styles.footerSection} col-sm-4`}>
      <h3 className={styles.title}>CÔNG TY CỔ PHẦN Graceful</h3>
      <p>
        Số ĐKKD: 9999999, ngày cấp: 1/09/2023, Nơi cấp: Sở Kế hoạch và đầu tư Hà
        Nội
      </p>
      <p>Địa chỉ trụ sở tại số 17 Duy Tân</p>
      <p>Địa chỉ liên hệ: 17 Duy Tân</p>
      <p>Điện thoại: +8424 - ****.****</p>
      <p>Fax: +8424 - ****.****</p>
      <p>Email: nhóm4@Graceful.com</p>
      <div className={styles.socialIcons1}>
        <a
          className={styles.socialIcons1A}
          href="https://www.facebook.com/canifa.fanpage/"
          target="_blank"
        >
          <FacebookIcon />
        </a>
        <a
          className={styles.socialIcons1A}
          href="https://www.instagram.com/canifa.fashion/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          className={styles.socialIcons1A}
          href="https://www.youtube.com/CANIFAOfficial"
          target="_blank"
        >
          <YouTubeIcon />
        </a>
        <a className={styles.socialIcons1A} href="#">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

const BrandLinks = () => {
  return (
    <div className={`${styles.footerSection} col-sm-2`}>
      <h3 className={styles.title}>THƯƠNG HIỆU</h3>
      <ul>
        <li>
          <a href="#">Giới thiệu</a>
        </li>
        <li>
          <a href="#">Tin tức</a>
        </li>
        <li>
          <a href="#">Tuyển dụng</a>
        </li>
        <li>
          <a href="#">Với cộng đồng</a>
        </li>
        <li>
          <a href="#">Hệ thống cửa hàng</a>
        </li>
        <li>
          <a href="#">Liên hệ</a>
        </li>
      </ul>
    </div>
  );
};

const SupportLinks = () => {
  return (
    <div className={`${styles.footerSection} col-sm-3`}>
      <h3 className={styles.title}>HỖ TRỢ</h3>
      <ul>
        <li>
          <a href="#">Hỏi đáp</a>
        </li>
        <li>
          <a href="#">Chính sách KHTT</a>
        </li>
        <li>
          <a href="#">Điều kiện - Điều khoản Chính sách KHTT</a>
        </li>
        <li>
          <a href="#">Chính sách vận chuyển</a>
        </li>
        <li>
          <a href="#">Gợi ý tìm size</a>
        </li>
        <li>
          <a href="#">Kiểm tra đơn hàng</a>
        </li>
        <li>
          <a href="#">Tra cứu điểm thẻ</a>
        </li>
        <li>
          <a href="#">Chính sách bảo mật thông tin KH</a>
        </li>
      </ul>
    </div>
  );
};

const AppDownload = () => {
  return (
    <div className={`${styles.footerSection} col-sm-3`}>
      <div>
        <h3 className={styles.title}>TẢI ỨNG DỤNG</h3>
        <div style={{ display: "flex" }}>
          <div className="bancode">
            <img
              className={styles.QR}
              src="https://canifa.com/assets/images/bancode.png"
              alt="qr"
            />
          </div>
          <div className={styles.footerApps}>
            <a
              className={styles.footerAppsA}
              href="https://play.google.com/store/apps/details?id=com.app.canifa&hl=en"
              target="_blank"
            >
              <img
                className={`${styles.footerAppsImg} ${styles.footerApps}`}
                src="https://canifa.com/assets/images/googleplay.png"
                alt=""
              />
            </a>
            <a
              className={styles.footerAppsA}
              href="https://apps.apple.com/vn/app/canifa/id1175895653"
              target="_blank"
            >
              <img
                className={`${styles.footerAppsImg} ${styles.footerApps}`}
                src="https://canifa.com/assets/images/appstore.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className={styles.title} style={{ marginTop: "20px" }}>
          PHƯƠNG THỨC THANH TOÁN
        </h3>
        <img src="https://canifa.com/assets/images/pay.svg" alt="" />
      </div>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <>
      <div className={styles.footerBottom}>
        <div className="copyright">© 2023 Graceful</div>
        <div className="bct">
          <a
            href="http://online.gov.vn/(X(1)S(edqk3incgl5uzlmn5mxjtu0b))/Home/WebDetails/36833?AspxAutoDetectCookieSupport=1"
            target="_blank"
            aria-label="Pay"
          >
            <img
              src="https://canifa.com/assets/images/bocongthuong.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footerContent} row`}>
        <SubscribeForm />
        <div
          className={styles.footerEnd}
          style={{ display: "flex", flexWrap: "wrap", background: "b" }}
        >
          <ContactInfo />
          <BrandLinks />
          <SupportLinks />
          <AppDownload />
        </div>
      </div>
      <div className={styles.hrContainer}>
        <hr />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
