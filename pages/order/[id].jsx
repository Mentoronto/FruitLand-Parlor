import styles from '../../styles/Order.module.css'
import Image from 'next/image';
import axios from 'axios';

const Order = ({order}) => {
  console.log('order :>> ', order);
  const status = 0;

  const statusClass =(index)=>{
    if (index - status<1) return styles.done;
    if (index - status===1) return styles.inProgress;
    if (index - status>1) return styles.notDone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}> 
         <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>1212</span>
              </td>
              <td>
                <span className={styles.name}>1212</span>
              </td>
              <td>
              <span className={styles.address}>212</span>
              </td>
              <td>
                <span className={styles.total}>$1</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={50} height={50} alt='' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
             <Image src="/img/checked.png" width={30} height={30} alt='' />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={50} height={50} alt='' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
             <Image src="/img/checked.png" width={30} height={30} alt='' />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={50} height={50} alt='' />
            <span>On the Way</span>
            <div className={styles.checkedIcon}>
             <Image src="/img/checked.png" width={30} height={30} alt='' />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={50} height={50} alt='' />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
             <Image src="/img/checked.png" width={30} height={30} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>$79.60
            </div>
            <button disabled className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  );
};


// export const getServerSideProps = async ({params}) =>{
//   const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
//   return{
//     props:{ 
//       order:res.data,
//     },
//   };
// };

export default Order;
