import css from "./SharedLayout.module.css";
import Header from "../Header/Header";
import { Suspense } from "react";
import  PageLoader  from "../UI/PageLoader/PageLoader.jsx";

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;