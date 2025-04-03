import { useContext } from "react";
import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/dataContext";
import SearchIcon from "@mui/icons-material/Search";
import langCheck from "./language";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  let store = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <header>
      <div className={styles.logo}>
        <div className="container">
          <div className={styles.responseLogo}>
            <div className={styles.photo}>
              <img
                src="./../images/LogoPhoto.png"
                alt="Haydar Aliyev"
              />
            </div>
            <div className={styles.photo}>
              <img
                src="./../images/LogoPhoto2.png"
                alt="Ilham Aliyev"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.photo}>
              <img
                src="./../images/LogoPhoto.png"
                alt="Haydar Aliyev"
              />
            </div>
            <div className={styles.name}>
              <img src="./../images/GERB.png" alt="" />
              <img src="./../images/Logo.png" alt="" />
            </div>
            <div className={styles.photo}>
              <img
                src="./../images/LogoPhoto2.png"
                alt="Ilham Aliyev"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.nav}>
              <MenuIcon
                fontSize="large"
                onClick={() => {
                  store.navModal.setData(!store.navModal.data);
                }}
                className={styles.hamBtn}
              />
              <ul className={styles.navBtns}>
                <li>
                  <Link
                    style={
                      store.route.data == "home"
                        ? { backgroundColor: "#1976D2", color: "white" }
                        : {}
                    }
                    className={styles.link}
                    to={"/"}
                  >
                    {langCheck.nav.home[store.lang.data]}
                  </Link>
                </li>
                <li>
                  <Link
                    style={
                      store.route.data == "multimedia"
                        ? { backgroundColor: "#1976D2", color: "white" }
                        : {}
                    }
                    className={styles.link}
                    to={"/multimedia"}
                  >
                    {langCheck.nav.multimedia[store.lang.data]}
                  </Link>
                </li>
                <li>
                  <Link
                    style={
                      store.route.data == "contact"
                        ? { backgroundColor: "#1976D2", color: "white" }
                        : {}
                    }
                    className={styles.link}
                    to={"/contact"}
                  >
                    {langCheck.nav.contact[store.lang.data]}
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.link}
                    onClick={() => {
                      store.categories.setModal(true)
                    }}
                  >
                    {langCheck.nav.categories[store.lang.data]}
                  </Link>
                </li>
                <li>
                  <Link
                    style={
                      store.route.data == "about"
                        ? { backgroundColor: "#1976D2", color: "white" }
                        : {}
                    }
                    className={styles.link}
                    to={"/about"}
                  >
                    {langCheck.nav.about[store.lang.data]}
                  </Link>
                </li>

              </ul>
              <form onSubmit={(e) => {
                e.preventDefault();
                let data = e.target.children[0].value
                e.target.children[0].value = ""
                navigate(`search/search/${data}`)

              }} className={styles.search}>
                <input
                  type="text"
                  placeholder={langCheck.nav.search[store.lang.data]}
                  required
                />
                <button className={styles.icon} type="submit">
                  <SearchIcon />
                </button>
              </form>
              <ul className={styles.langBtns}>
                <li
                  style={
                    store.lang.data == 0
                      ? { backgroundColor: "black", color: "white" }
                      : {}
                  }
                  onClick={() => {
                    store.lang.setData(0);
                  }}
                >
                  AZ
                </li>
                <li
                  style={
                    store.lang.data == 1
                      ? { backgroundColor: "black", color: "white" }
                      : {}
                  }
                  onClick={() => {
                    store.lang.setData(1);
                  }}
                >
                  EN
                </li>

                <li
                  style={
                    store.lang.data == 2
                      ? { backgroundColor: "black", color: "white" }
                      : {}
                  }
                  onClick={() => {
                    store.lang.setData(2);
                  }}
                >
                  RU
                </li>
                <li
                  style={
                    store.lang.data == 3
                      ? { backgroundColor: "black", color: "white" }
                      : {}
                  }
                  onClick={() => {
                    store.lang.setData(3);
                  }}
                >
                  CHIN
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
