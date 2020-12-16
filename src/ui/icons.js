import icon from "./images/icons.png";
import activeIcon from "./images/activeIcons.png";
import { styled } from "baseui";

export const FilterRestaurantIcon = styled("div", props => {
    return {
        backgroundImage:
            props.$selected === 0 ? `url(${activeIcon})` : `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px 0px",
        backgroundSize: "39px",
        width: "20px",
        height: "20px",
        maxWidth: "100%",
        maxHeight: "100%",
    };
});

export const FilterRetailIcon = styled("div", props => {
    return {
        backgroundImage:
            props.$selected === 1 ? `url(${activeIcon})` : `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "1px -20px",
        backgroundSize: "39px",
        width: "20px",
        height: "20px",
        maxWidth: "100%",
        maxHeight: "100%",
    };
});

export const FilterLocationIcon = styled("div", props => {
    return {
        backgroundImage:
            props.$selected === 2 ? `url(${activeIcon})` : `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-20px 1px",
        backgroundSize: "39px",
        width: "20px",
        height: "20px",
        maxWidth: "100%",
        maxHeight: "100%",
    };
});
