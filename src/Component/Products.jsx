import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import { ItemContext } from './itemContext';
import currency from 'currency.js';

const Product = ({ item , row}) => {
  const purchase = useContext(ItemContext);
  let { itemName, price, id } = item;
  id = id - 1;
  // const [count, setCount] = useState(0);

  function increaseCount() {
    return purchase.setCount((prevCount) => prevCount + 1);
  }
  // function increaseTotal() {
  //   console.log(purchase.total);
  //   // return purchase.setTotal((prevTotal) => prevTotal + 1);
  // }

  function decreaseCount() {
    return purchase.setCount((prevCount) => {
      if (prevCount === 0) {
        return 0;
      } else if (prevCount > 0) {
        return prevCount - 1;
      }
    });
  }
  function findProduct(id) {
    let item = id;
    let itemPrice = '';
    for (let product in row) {
      if (product === item) {
        let puchaseItem = {
          itemName: row[product].itemName,
          price: row[product].price,
          image: row[product].image,
        };
        itemPrice = puchaseItem.price;
        purchase.setSelectedItem(puchaseItem);
        purchase.setTotal(puchaseItem.price);
      }
    }
    if (itemPrice !== purchase.total) {
      let addedPrice = currency(itemPrice).add(purchase.total).value;
      purchase.setTotal(`${addedPrice}`);
    }
  }
  function showLastPuchase(e, findProduct) {
    let itemID = e.target.value;
    findProduct(itemID);
    // return purchase.setLastProduct(e.target.value);
  }

  return (
      <Col>
        <div className="item-box">
          <img
            className="image"
            src={
              'https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg'
            }
            alt="Product"
          />
          <h5 className="item-name">{itemName}</h5>
          <h6 className="price">{price}</h6>
          <div className="counter-container">
            <button
              className="add-selected-items"
              value={id}
              onClick={(e) => {
                increaseCount();
                showLastPuchase(e, findProduct);
              }}
            >
              +
            </button>
            <button
              className="add-selected-items"
              value={id}
              onClick={() => decreaseCount()}
            >
              -
            </button>
          </div>
        </div>
      </Col>
  );
};

export default Product;