import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./NewHotDeal.module.css";
import SlideCardItem from "../SlideCardItem/SlideCardItem";
import data from "../../../public/data-product/data.json";

export default function NewHotDeal() {
  const dataSale = data.map((item) => item).filter((item) => item.sale.isSale);
  const targetDate: any = new Date("2023-09-14T13:20:00");
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
    <>
      <div className={`container-fluid ${styles.container}`}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              marginRight: "20px",
              fontFamily: '"Montserrat", serif',
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            ĐANG SALE NÈ !
          </Typography>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              fontFamily: '"Montserrat", serif',
            }}
          >
            <div className={styles.box}>
              {addLeadingZero(timeRemaining.days)}
            </div>
            <div className={styles.text}>:</div>
            <div className={styles.box}>
              {addLeadingZero(timeRemaining.hours)}{" "}
            </div>
            <div className={styles.text}>:</div>

            <div className={styles.box}>
              {addLeadingZero(timeRemaining.minutes)}{" "}
            </div>
            <div className={styles.text}>:</div>

            <div className={styles.box}>
              {addLeadingZero(timeRemaining.seconds)}
            </div>
          </Box>
        </Box>
      </div>
      <SlideCardItem props={dataSale} />
    </>
  );
}
