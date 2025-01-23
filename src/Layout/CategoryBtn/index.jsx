import { useContext } from "react";
import styles from "./index.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { DataContext } from "../../Context/dataContext";
const CategoryBtn = () => {
    let store = useContext(DataContext);
    return (
        <button className={styles.btn} onClick={() => { store.navModal.setData(true)}}>
            <MenuIcon />
        </button>
    );
};

export default CategoryBtn;
