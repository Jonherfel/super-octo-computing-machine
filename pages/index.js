import React from "react";
import { Coaching, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Homepage = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2> Best Coaching Sessions</h2>
        <p> Find The Best Coach For You</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Coaching key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Homepage;
