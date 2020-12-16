import { styled } from "baseui";

export const Container = styled("div", {
    padding: "1.5rem 0.7rem 0",
});

export const Flex = styled("div", {
    display: "flex",
    justifyContent: "space-between",
});

export const FilterButtonsContainer = styled("div", {
    padding: "0.5rem 0",
    borderTop: "solid 2px #EEEEEE",
    "@media screen and (max-width: 450px)": {
        overflowX: "scroll",
    },
});
