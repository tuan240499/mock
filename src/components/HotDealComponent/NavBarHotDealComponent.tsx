import { useEffect, useState } from "react";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import BoltIcon from '@mui/icons-material/Bolt';
import styles from "./HotDeal.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const NavBarHotDealComponent = () => {
  const targetDate: any = new Date("2023-09-18T22:00:00");

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now: any = new Date();
      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const addLeadingZero = (value: any) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className={styles.navBarWrapper}>
        <h5 className={styles.flashDealsLable}>
          F<BoltIcon />ASH DEALS !
        </h5>
        <div className={styles.clockContainer}>
          <div className={styles.clockItem}>
            {addLeadingZero(timeRemaining.hours)}{" "}
          </div>

          <div className={styles.clockItem}>
            {addLeadingZero(timeRemaining.minutes)}{" "}
          </div>

          <div className={styles.clockItem}>
            {addLeadingZero(timeRemaining.seconds)}
          </div>
        </div>
        {/* <div style={{ display: "flex", marginLeft: "auto", alignItems: "center", color: "#da291c" }}>
          <a href={"#"} style={{color: "#da291c", textDecoration: "none"}}>Xem tất cả</a>
          <KeyboardDoubleArrowRightIcon fontSize="small" />
        </div> */}
      </div>
  )
}

export default NavBarHotDealComponent;