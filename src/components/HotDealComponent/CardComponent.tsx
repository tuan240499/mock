import styles from "./Card.module.css"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import { useState } from "react";
import { Link } from "react-router-dom";


const CardComponent = (props: any) => {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [colorState, setColorState] = useState<string>(`${props.colors[0]}`);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const a: number = props.salePrice;
  const b: number = props.price;
  const discount: number = (a/b)*100;

  return (
    <div className={styles.cardContainer}>
      <Link to={`/product/${props.id}`}>
      <div className={styles.cardImg} onClick={() => {}}>
        {colorState === props.colors[0] && (
          <img className={styles.img} src={props.imageUrl[0]} alt="" />
        )}
        {colorState === props.colors[1] && (
          <img className={styles.img} src={props.imageUrl[1]} alt="" />
        )}
        {colorState === props.colors[2] && (
          <img className={styles.img} src={props.imageUrl[2]} alt="" />
        )}
        {colorState === props.colors[3] && (
          <img className={styles.img} src={props.imageUrl[3]} alt="" />
        )}

      </div>
      </Link>
      
      <div className={styles.cardInfo}>
        <div className={styles.colorBtnWrapper}>
          <Radio
            {...controlProps('a')}
            sx={{
              color: `${props.colors[0]}`,
              outlineOffset: "5px",
              background: `${props.colors[0]}`,
              padding: "0.1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[0]}`,
                outline: `1px solid #333`,
              },
            }}
            onClick={() => setColorState(props.colors[0])}
          />
          
          {props.colors[1] && (
            <Radio
            {...controlProps('b')}
            sx={{
              color: `${props.colors[1]}`,
              outlineOffset: "5px",
              background: `${props.colors[1]}`,
              padding: "0.1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[1]}`,
                outline: `1px solid #333`,
              },
            }}
            onClick={() => setColorState(props.colors[1])}
          />
          )}

          {props.colors[2] && (
            <Radio
            {...controlProps('c')}
            sx={{
              color: `${props.colors[2]}`,
              outlineOffset: "5px",
              background: `${props.colors[2]}`,
              padding: "0.1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[2]}`,
                outline: `1px solid #333`,
              },
            }}
            onClick={() => setColorState(props.colors[2])}
          />
          )}
          
          {props.colors[3] && (
            <Radio
            {...controlProps('d')}
            sx={{
              color: `${props.colors[3]}`,
              outlineOffset: "5px",
              background: `${props.colors[3]}`,
              padding: "0.1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.colors[3]}`,
                outline: `1px solid #333`,
              },
            }}
            onClick={() => setColorState(props.colors[3])}
          />
          )}
        </div>
        <br />
        
        <Link to={`/product/${props.id}`} style={{color: "black", textDecoration: "none"}}>
          <span className={styles.productName} onClick={() => {}}>{props.productName}</span>
        </Link>
        <br />
        <span className={styles.salePrice}>{props.salePrice} ₫</span>
        <br />
        
        {" "}
        {props.isSale && (
          <>
            <span className={styles.price}>{props.price} ₫</span>
            <span className={styles.discount}>-{Math.round(discount)}%</span>
          </>
        )}
        
        <br />
        
      </div>
    </div>
  );
};

export default CardComponent;