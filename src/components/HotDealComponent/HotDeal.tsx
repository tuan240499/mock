import styles from "./HotDeal.module.css";
import ProductComponent from "./ProductComponent";
import { useEffect, useState } from "react";
import BoltIcon from '@mui/icons-material/Bolt';


const HotDeals = () => {
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

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const addLeadingZero = (value: any) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navBarWrapper}>
            <h5 className={styles.flashDealsLable}>
              F<BoltIcon />ASH DEALS !
            </h5>
            <div className={styles.clockContainer}>
              <div className={styles.clockItem}>
                {addLeadingZero(timeRemaining.hours)}{" "}
              </div>
              <div className={styles.text}>:</div>
              <div className={styles.clockItem}>
                {addLeadingZero(timeRemaining.minutes)}{" "}
              </div>
              <div className={styles.text}>:</div>
              <div className={styles.clockItem}>
                {addLeadingZero(timeRemaining.seconds)}
              </div>
            </div>
          </div>
          <ProductComponent /> 
      {/* {timeRemaining.days + timeRemaining.hours + timeRemaining.minutes + timeRemaining.seconds >= 0 ? (
        <div>
          
        </div>
      ) : (
        <Empty />
      )} */}
      
    </div>
  );
}

export default HotDeals;


// const Empty = () => {
//   return (
//     <>
//     </>
//   )
// }
