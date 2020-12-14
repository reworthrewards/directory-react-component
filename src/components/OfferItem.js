import React from "react";
import { StyledThumbnail } from "baseui/card";
import { Paragraph4 } from "baseui/typography";
import { Flex } from "./styledComponents";

const OfferItem = ({ offerName, offerDiscount }) => {
    return (
        <Flex style={{ margin: "1rem 0", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <StyledThumbnail
                    style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        margin: 0,
                    }}
                    src="https://cf.shopee.com.my/file/7fd2993843437f1a2fe5981cd40dffbb"
                />
                <span style={{ marginLeft: "0.5rem", textAlign: "left" }}>
                    <p style={{ marginBottom: "5px" }}>{offerName}</p>
                    <Paragraph4
                        className="description"
                        style={{ marginTop: "0px" }}>
                        Válido en la primer visita (hasta 19 sep)
                    </Paragraph4>
                </span>
            </div>
            <p>{`${offerDiscount * 100}%`}</p>
        </Flex>
    );
};

export default OfferItem;
