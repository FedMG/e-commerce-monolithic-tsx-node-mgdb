// pages/about.tsx
import { createStyles } from "@mantine/core";
import { NextPage } from "next";

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  title: {
    fontSize: "1.3em",
    fontWeight: "bold",
    // marginTop: "2rem",
    // marginBottom: "1rem",
  },
  description: {
    fontsize: "2rem",
  },
}));

const About: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Who are us?</h1>
      <p className={classes.description}>
        Welcome to our ecommerce store! We're a small team of passionate
        individuals who believe that everyone should have access to
        high-quality, affordable products. Our mission is to bring together the
        best products from around the world and make them accessible to you. We
        pride ourselves on our commitment to customer satisfaction. From the
        moment you place your order to the moment it arrives at your doorstep,
        we're dedicated to ensuring that you have the best possible experience.
        We believe that shopping online should be easy, stress-free, and
        enjoyable, and we work hard to make that a reality for every customer.
        At our store, you'll find a wide variety of products, from clothing and
        accessories to home goods and electronics. We're constantly adding new
        items to our inventory, so be sure to check back often to see what's
        new. Thank you for choosing to shop with us. We appreciate your business
        and look forward to providing you with exceptional service and quality
        products.
      </p>
    </div>
  );
};

export default About;
