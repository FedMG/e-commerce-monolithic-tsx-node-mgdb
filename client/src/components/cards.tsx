import { Card, Image, Text, Group, createStyles } from "@mantine/core";
import { ProductCardProps } from "additional";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxShadow: "0.15px 0.15px 1.165px #777777",
    border: "1px solid #f5f5f5",
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.xs,
    },
  },
  price: {
    lineHeight: 1,
    fontSize: theme.fontSizes.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,

    [theme.fn.largerThan("sm")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  text: {
    lineHeight: 1,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
    [theme.fn.largerThan("sm")]: {
      fontSize: theme.fontSizes.md,
    },
  },
  rating: {
    lineHeight: 1,
  },
  priceRatingContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  infoSection: {
    padding: "0.7em",
    paddingBottom: "1.9em",
  },
  star: {
    color: "orange",
  },
}));

export const ProductsCard: React.FC<ProductCardProps> = ({ element }) => {
  const { classes } = useStyles();

  return (
    <Card radius="xs" className={classes.card} p="xs">
      <Card.Section className={classes.imageSection}>
        <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
      </Card.Section>
      <Card.Section className={classes.infoSection}>
        <Group position="apart">
          <div className={classes.priceRatingContainer}>
            <Text fw={700} className={classes.price} span>
              ${element.price}
            </Text>
            <Text fw={500} fz="md" className={classes.rating} span>
              <span className={classes.star}>⭐</span>
              {element.rating}
            </Text>
          </div>
          <Text
            weight={400}
            className={classes.text}
            size="md"
            lineClamp={2}
            truncate
          >
            {element.name}
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
};
