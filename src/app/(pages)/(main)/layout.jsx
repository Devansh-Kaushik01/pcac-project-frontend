"use client"
import Header from "./components/header/header"

const mainLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default mainLayout;