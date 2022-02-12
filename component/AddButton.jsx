import styles from "../styles/AddButton.module.css";

const AddButton = ({SetClose}) => {
  return (
    <div onClick={()=>SetClose(false)} className={styles.mainAddButton}>
      Add New Product
      </div>
  );
};

export default AddButton;
