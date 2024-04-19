import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { palette, spacing } from "../../themes";

export const styles = {
  container: style({
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingTop: spacing(6.4),
  }),
  controlWrapper: style({
    width: "100%",
    position: "absolute",
    height: "1rem",
  }),
  inputsContainer: style({
    width: "calc(100% + 16px)",
    margin: `0 calc(${spacing(4)} / -2)`,
    position: "absolute",
    height: "1rem",
  }),
  input: style({
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 0,
    zIndex: 100,
  }),
  control: style({
    width: "1rem",
    height: "1rem",
    top: "50%",
    borderRadius: "50%",
    position: "absolute",
    background: palette.primary.main,
    marginLeft: `calc(${spacing(4)} / -2)`,
    transform: "translate3d(0, -50%, 0)",
    zIndex: 2,
  }),
  rail: style({
    position: "absolute",
    width: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    height: "6px",
    borderRadius: "3px",
    background: palette.border.main,
  }),
  innerRail: style({
    position: "absolute",
    height: "100%",
    background: palette.primary.dark,
  }),
};

export const inputVariants = recipe({
  base: styles.input,
  variants: {
    type: {
      default: {
        appearance: "none",
        opacity: 0,
        pointerEvents: "none",
      },
      double: {
        appearance: "none",
        opacity: 0,
        pointerEvents: "none",
      },
    },
  },
});

globalStyle(`${styles.input}::-webkit-slider-thumb`, {
  appearance: "none",
  pointerEvents: "all",
  width: "1rem",
  height: "1rem",
  borderRadius: "0rem",
  border: "0 none",
  cursor: "grab",
});

globalStyle(`${styles.input}::-webkit-slider-thumb & active`, {
  cursor: "grabbing",
});
