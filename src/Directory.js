import React, { useState, useEffect } from "react";
import axios from "axios";
// baseui imports
import { Label2, Paragraph4 } from "baseui/typography";
import { Spinner } from "baseui/spinner";
import { Input } from "baseui/input";
import Search from "baseui/icon/search";
import { StatefulButtonGroup, MODE, SHAPE } from "baseui/button-group";
import { Button, SIZE } from "baseui/button";
import { ChevronLeft, ChevronDown } from "baseui/icon";
import { StyledTable, StyledRow, StyledCell } from "baseui/table";
// styletron setup
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
// local imports
import { Container, Flex } from "./components/styledComponents";
import OfferItem from "./components/OfferItem";
// react-virtualized imports
import List from "react-virtualized/dist/commonjs/List";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import {
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized/dist/commonjs/CellMeasurer";

const engine = new Styletron();

function HeaderApp() {
    return (
        <Flex style={{ marginBottom: "1.5rem" }}>
            <div>
                <Label2>Directorio de ofertas</Label2>
                <span>
                    <Paragraph4 className="description">
                        Powered by REWORTH
                    </Paragraph4>
                </span>
            </div>
            <Label2>Ver más</Label2>
        </Flex>
    );
}

const Directory = () => {
    const [offersData, setOffersData] = useState(null);
    const [value, setValue] = useState("");

    // Table variables
    const DATA = offersData;
    const COLUMNS = ["element"];
    const cache = new CellMeasurerCache({
        defaultHeight: 80,
        fixedHeight: true,
    });

    useEffect(() => {
        apiConnection();
    }, [value]);

    const apiConnection = () => {
        axios({
            method: "GET",
            url: `${process.env.BASE_URL}/directory?name=${value}`,
        })
            .then(res => {
                const { data } = res.data;
                setOffersData(data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <Container>
                    <HeaderApp />
                    <div style={{ margin: "0.7rem 0" }}>
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            startEnhancer={<Search size="18px" />}
                            placeholder="Busca un negocio"
                            clearable
                            clearOnEscape
                        />
                    </div>
                    <div
                        style={{
                            padding: "0.5rem 0",
                            borderTop: "solid 2px #EEEEEE",
                        }}>
                        <StatefulButtonGroup
                            mode={MODE.radio}
                            initialState={{ selected: null }}
                            shape={SHAPE.pill}
                            size={SIZE.compact}>
                            <Button startEnhancer={ChevronLeft}>
                                Restaurante
                            </Button>
                            <Button startEnhancer={ChevronLeft}>Retail</Button>
                            <Button
                                endEnhancer={() => <ChevronDown size={14} />}>
                                Sort
                            </Button>
                        </StatefulButtonGroup>
                    </div>
                    {offersData ? (
                        <div
                            style={{
                                height: "85vh",
                                borderRadius: "0.8rem",
                            }}>
                            <StyledTable
                                role="grid"
                                aria-colcount={COLUMNS.length}
                                aria-rowcount={DATA.length}>
                                <div style={{ height: "100%" }}>
                                    <AutoSizer>
                                        {({ width, height }) => (
                                            <List
                                                height={height}
                                                width={width}
                                                rowCount={DATA.length}
                                                rowHeight={cache.rowHeight}
                                                deferredMeasurementCache={cache}
                                                rowRenderer={({
                                                    index,
                                                    key,
                                                    parent,
                                                    style,
                                                }) => (
                                                    <CellMeasurer
                                                        cache={cache}
                                                        columnIndex={0}
                                                        key={key}
                                                        parent={parent}
                                                        rowIndex={index}>
                                                        <StyledRow
                                                            role="row"
                                                            key={key}
                                                            style={style}>
                                                            <StyledCell
                                                                role="gridcell"
                                                                key={index}>
                                                                <OfferItem
                                                                    offerName={
                                                                        DATA[
                                                                            index
                                                                        ].name
                                                                    }
                                                                    offerDiscount={
                                                                        DATA[
                                                                            index
                                                                        ]
                                                                            .discount
                                                                    }
                                                                />
                                                            </StyledCell>
                                                        </StyledRow>
                                                    </CellMeasurer>
                                                )}
                                            />
                                        )}
                                    </AutoSizer>
                                </div>
                            </StyledTable>
                        </div>
                    ) : (
                        <Spinner />
                    )}
                </Container>
            </BaseProvider>
        </StyletronProvider>
    );
};

export default Directory;
