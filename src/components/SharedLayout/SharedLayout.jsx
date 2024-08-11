import css from "./SharedLayout.module.css";
import { Suspense } from "react";

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;