import { useProductCardStyles } from "@/styles/matine";
import { Image, Text } from "@mantine/core";

import { ProductCardProps } from "additional";

export const ProductsCard: React.FC<ProductCardProps> = ({ element }) => {
  const { classes } = useProductCardStyles();
  const { name, image, price, rating } = element;

  return (
    <div className={classes.card}>
      <div className={classes.imageSection}>
        <Image className={classes.image} src={image.src} alt="" />
      </div>

      <div className={classes.infoSection}>
        <div className={classes.priceRatingContainer}>
          <Text className={classes.price} span>
            ${price}
          </Text>

          <Text fz="md" className={classes.rating} span>
            <span className={classes.star}>⭐</span>
            {rating}
          </Text>
        </div>

        <Text className={classes.text} size="md" lineClamp={2} truncate>
          {name}
        </Text>
      </div>
    </div>
  );
};
