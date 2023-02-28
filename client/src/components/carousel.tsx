import { useRef } from "react";
import { BoardProps } from "additional";

import Autoplay from "embla-carousel-autoplay";
import { createStyles, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { data } from "./images";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  board: {
    width: "100%",
    maxHeight: '440px',

    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    position: "absolute",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.xl,
    marginTop: theme.spacing.xs,
  },

  category: {
    position: "absolute",
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  controls: {
    [theme.fn.smallerThan("sm")]: {
      // display: "none",
      opacity: 0,
      cursor: 'default',
    },
  },
}));

function Board({ image, title, category }: BoardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.board}>
      <Image
        src={image}
        alt="image carousel"
        width={700}
        height={475}
        sizes="100vw"
        className={classes.image}
      />
      <Text className={classes.category} size="xs">
        {category}
      </Text>
      <Title order={3} className={classes.title}>
        {title}
      </Title>
    </div>
  );
}

export function BoardsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 4500 }))
  const { classes } = useStyles()

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Board {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      slidesToScroll={1}
      controlSize={40}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={{ controls: classes.controls }}
      withIndicators
      draggable
      loop
    >
      {slides}
    </Carousel>
  );
}
