import React, { useState, ReactNode } from "react";
import CategoryMenu from "./CategoryMenu";
import Sidebar from "./Sidebar";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

function Layout({ children}: Props) {
  const [state, setState] = useState();

  return (
    <main>
      <Sidebar />
      <CategoryMenu />
      {children}
    </main>
  );
}

export default Layout;
