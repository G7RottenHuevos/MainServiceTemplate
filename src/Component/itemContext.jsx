import React, { createContext, useState } from 'react';
export const ItemContext = createContext();
// This context provider is passed to any component requiring the context
export const ItemProvider = ({ children }) => {
  const randomPrice = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let price = `$${getRandomInt(300)}.${getRandomInt(99)}`;
    return price;
  };
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  let [lastProduct, setLastProduct] = useState('');
  let [CustomerAlsoBought1, setCustomerAlsoBought1] = useState([
    {
      id: 1,
      itemName: 'CustomersAlsoBought: ItemName 1',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 2,
      itemName: 'CustomersAlsoBought: ItemName 2',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 3,
      itemName: 'CustomersAlsoBought: ItemName 3',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 4,
      itemName: 'CustomersAlsoBought: ItemName 4',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 5,
      itemName: 'CustomersAlsoBought: ItemName 5',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
  ]);
  let [CustomerAlsoBought2, setCustomerAlsoBought2] = useState([
    {
      id: 6,
      itemName: 'CustomersAlsoBought: ItemName 6',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 7,
      itemName: 'CustomersAlsoBought: ItemName 7',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 8,
      itemName: 'CustomersAlsoBought: ItemName 8',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 9,
      itemName: 'CustomersAlsoBought: ItemName 9',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 10,
      itemName: 'CustomersAlsoBought: ItemName 10',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
  ]);
  let [similarItems1, setSimilarItems1] = useState([
    {
      id: 1,
      itemName: 'Similar Items: ItemName 1',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 2,
      itemName: 'Similar Items: ItemName 2',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 3,
      itemName: 'Similar Items: ItemName 3',
      price: '$33.49',
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 4,
      itemName: 'Similar Items: ItemName 4',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 5,
      itemName: 'Similar Items: ItemName 5',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
  ]);
  let [similarItems2, setSimilarItems2] = useState([
    {
      id: 6,
      itemName: 'Similar Items: ItemName 6',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 7,
      itemName: 'Similar Items: ItemName 7',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 8,
      itemName: 'Similar Items: ItemName 8',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 9,
      itemName: 'Similar Items: ItemName 9',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
    {
      id: 10,
      itemName: 'Similar Items: ItemName 10',
      price: randomPrice(),
      image: 'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg',
      isChecked: false,
    },
  ]);

  let [selectedItem, setSelectedItem] = useState({});
  // console.log(selectedItem.price);
  return (
    <ItemContext.Provider
      value={{
        count,
        setCount,
        total,
        setTotal,
        lastProduct,
        setLastProduct,

        CustomerAlsoBought1,
        setCustomerAlsoBought1,
        CustomerAlsoBought2,
        setCustomerAlsoBought2,
        similarItems1,
        setSimilarItems1,
        similarItems2,
        setSimilarItems2,

        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
