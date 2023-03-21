import { Image, Text } from "@mantine/core";
import { getPriceWithDiscount } from "@/utils";
import { useProductCardStyles } from "@/styles/matine";

import { DiscountInfoProps, ProductCardProps } from "additional";
import { FC, ReactElement } from "react";


const DiscountInfo: FC<DiscountInfoProps> = ({
  children,
  discount,
  price,
  classes,
}): ReactElement | null => {
  if (!children) return null;
  if (!discount)
    return (
      <div className={classes.priceRatingContainer}>
        {children[0]}
        {children[1]}
      </div>
    );

  return (
    <div className={classes.discountInfoContainer}>
      <Text className={classes.originalPrice}>
        <del>${price}</del>
      </Text>
      <div className={classes.priceRatingContainer}>
        <div>
          {children[0]}
          <Text className={classes.discount} span>
            {" "}
            -{discount}% OFF
          </Text>
        </div>
        {children[1]}
      </div>
    </div>
  );
};

export const ProductsCard: React.FC<ProductCardProps> = ({ element }) => {
  const { classes } = useProductCardStyles();
  const { name, image, price, rating } = element;
  const discount = 15; // discount temporal

  return (
    <div className={classes.card}>
      <div className={classes.imageSection}>
        <Image className={classes.image} src={image.src} alt="" />
      </div>

      <div className={classes.infoSection}>
        <DiscountInfo
          discount={discount}
          price={price}
          classes={{
            originalPrice: classes.originalPrice,
            discount: classes.discount,
            discountInfoContainer: classes.discountInfoContainer,
            priceRatingContainer: classes.priceRatingContainer,
          }}
        >
          <Text className={classes.price} span>
            ${getPriceWithDiscount(discount, price)}
          </Text>

          <Text className={classes.rating} span>
            <span className={classes.star}>⭐</span>
            {rating}
          </Text>
        </DiscountInfo>

        <Text className={classes.text} lineClamp={2} truncate>
          {name}
        </Text>
      </div>
    </div>
  );
};
