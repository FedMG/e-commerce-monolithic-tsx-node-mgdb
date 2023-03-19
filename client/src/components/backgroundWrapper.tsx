import { BackgroundWrapperProps } from "additional";

import { useBackgroundWrapperStyles } from "@/styles/matine";

import { CreateBlob } from "./createBlobs";
import { blobs } from "@/refs";

export const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  padTop,
}) => {
  const { classes } = useBackgroundWrapperStyles();

  return (
    <div style={{ paddingTop: padTop }}>
      <div className={classes.blobsContainer}>
        {blobs.map(({ d }, i) => (
          <CreateBlob 
            key={i}
            d={d}
            className={classes.blob}
            alt="an abstract orange shape for decoration"
          />
        ))}
      </div>
      {children}
    </div>
  );
};
