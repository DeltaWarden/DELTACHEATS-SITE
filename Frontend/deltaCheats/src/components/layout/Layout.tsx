import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SubHeader from "../subheader/SubHeader";
import Footer from "../footer/Footer";

const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <SubHeader />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
