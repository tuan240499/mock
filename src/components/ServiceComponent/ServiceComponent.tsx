import { Container } from "@mui/material";
import styles from "./ServiceComponent.module.css";

export default function ServiceComponent() {
  const dataService = [
    {
      title: "Thanh toán khi nhận hàng (COD)",
      content: "Giao hàng toàn quốc.",
      url: "https://media.canifa.com/Simiconnector/Service/s/e/service1.png",
    },
    {
      title: "Miễn phí giao hàng",
      content: "Với đơn hàng trên 599.000đ.",
      url: "https://media.canifa.com/Simiconnector/Service/s/e/service2.png",
    },
    {
      title: "Đổi hàng miễn phí",
      content: "Trong 30 ngày kể từ ngày mua.",
      url: "https://media.canifa.com/Simiconnector/Service/s/e/service3.png",
    },
  ];

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className={styles.service}>
        {dataService.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>
              <img src={item.url} alt="" />
            </div>
            <div className={styles.box}>
              <p className={styles.title}>{item.title}</p>
              <span className={styles.content}>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
