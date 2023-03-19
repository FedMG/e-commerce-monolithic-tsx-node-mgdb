import { NextPage } from "next";

import { BackgroundWrapper } from "@/components/backgroundWrapper";
import { useAboutStyles } from "@/styles/matine";

const About: NextPage = () => {
  const { classes } = useAboutStyles();

  return (
    <BackgroundWrapper padTop={10}>
      <div className={classes.container}>
        <h2 className={classes.title}>Who are us?</h2>
        <p className={classes.description}>
          <hr />
          <span className={classes.fragment}>
            <span className={classes.span}>
              Welcome to our ecommerce store!
            </span>
            We&apos;re a small team of passionate individuals who believe that
            everyone should have access to high-quality, affordable products.
          </span>
          <span className={classes.fragment}>
            <strong>Our mission: </strong>
            <span className={classes.span}>
              is to bring together the best products from around the world and
              make them accessible to you. We pride ourselves on our commitment
              to customer satisfaction. From the moment you place your order to
              the moment it arrives at your doorstep, we&apos;re dedicated to
              ensuring that you have the best possible experience.
            </span>
            We believe that shopping online should be easy, stress-free, and
            enjoyable, and we work hard to make that a reality for every
            customer.
          </span>
          <span className={classes.fragment}>
            <strong>At our store: </strong>
            <span className={classes.span}>
              you&apos;ll find a wide variety of products, from clothing and
              accessories to keep you looking stylish and on-trend. We&apos;re
              constantly adding new items to our inventory, so be sure to check
              back often to see what&apos;s new.
            </span>
          </span>
          Thank you for choosing to shop with us. We appreciate your business
          and look forward to providing you with exceptional service and quality
          products.
        </p>
      </div>
    </BackgroundWrapper>
  );
};

export default About;
