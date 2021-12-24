import React from "react";
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";
import Email from "../components/Email";
import Benefits from "../components/Benefits";
import Products from "../components/Products";
import Product from "../components/Product";
import bg1 from "../source/static/carrousel/bg1.jpg";
import bg2 from "../source/static/carrousel/bg2.jpg";
import bg3 from "../source/static/carrousel/bg3.jpg";
import "./style/Home.css";
const Home = () => {
  return (
    <div className="Home">
      <Carrousel />
      <div className="Home__products">
        <Card title="Dog Accessories" url="/" img={bg1} />
        <Card title="Dog care" url="/" img={bg2} />
        <Card title="Other Dog Needs " url="/" img={bg3} />
      </div>
      <Products title="The Best Products" url="/">
        {[
          {
            id: "1",
            name: "Dog",
            img: "img",
            url: "/",
            start: [1, 2, 3, 4],
            reviews: [1, 2, 3, 4, 5],
            cost: "10$",
          },
        ].map((item) => {
          return (
            <Product
              key={item.id}
              name={item.name}
              img={item.img}
              url={item.url}
              start={item.start}
              reviews={item.reviews}
              cost={item.cost}
            />
          );
        })}
      </Products>
      <Email />
      <Benefits />
    </div>
  );
};

export default Home;
