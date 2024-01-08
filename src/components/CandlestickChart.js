import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions, PanResponder } from 'react-native';
import { VictoryCandlestick, VictoryAxis, VictoryChart, VictoryTooltip } from 'victory-native';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { MyColors } from '../../assets/MyColors';
import { useSelector } from 'react-redux';
import bitcoin from '../../assets/data/bitcoin.json'
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

const CandlestickChart = () => {
    const reduxData = useSelector((state) => state.reducer)
    const [coinId, setCoinId] = useState('bitcoin')
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const screenHeight = Dimensions.get('window').height
    const [scale, setScale] = useState(1)

    useEffect(() => {
        setCoinId(reduxData)
        const formattedData = bitcoin.map((data) => ({
            x: new Date(data[0]), // Convert timestamp to a Date object
            open: data[1],
            high: data[2],
            low: data[3],
            close: data[4],
        }));
        setCryptoData(formattedData);
        setLoading(false);
        // const fetchCryptoData = async () => {
        //     try {
        //         const response = await axios.get(
        //             `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=1`
        //         );
        //         const formattedData = response.data.map((data) => ({
        //             x: new Date(data[0]), // Convert timestamp to a Date object
        //             open: data[1],
        //             high: data[2],
        //             low: data[3],
        //             close: data[4],
        //         }));
        //         setCryptoData(formattedData);
        //         setLoading(false);
        //     } catch (error) {
        //         console.error('Free API too many attemps', error);
        //         setLoading(false);
        //     }
        // };
        // fetchCryptoData();
    }, [reduxData]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={MyColors.white} />
            </View>
        );
    }

    const onPinchEvent = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            const newScale = scale * event.nativeEvent.scale;
            setScale(newScale <= 1 ? 1 : newScale); // Prevent scaling too small
        }
    }

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            // Use gestureState to handle panning if needed
        },
    });

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        // contentOffset={{ x: 10000, y: 0 }}
        >
            <View style={styles.container}>
                <VictoryChart
                    width={cryptoData.length * 25}
                    height={screenHeight * .63}
                    theme={{
                        axis: {
                            style: {
                                // axis: { stroke: 'white' },
                                // ticks: { stroke: 'white', size: 5 },
                                tickLabels: { fill: MyColors.textSecondary, fontSize: 10 },
                            },
                        },
                        // background: { fill: 'white' },
                    }}
                >
                    <VictoryAxis // Place the x-axis on the top (mirrored)
                        tickFormat={(date) => new Date(date).toLocaleTimeString()} // Format x-axis tick labels to display time
                        interval="hour" // Set the interval to display ticks at hourly intervals
                        style={{
                            tickLabels: { padding: 5 },
                            grid: { stroke: 'rgba(255, 255, 255, 0.1)' },
                        }} // Adjust the padding for x-axis tick labels
                    />
                    <VictoryAxis dependentAxis // Display the price axis on the right side
                        orientation='left'
                        tickFormat={(tick) => `$${tick}`} // Format the price ticks with a dollar sign
                        style={{
                            grid: { stroke: 'rgba(255, 255, 255, 0.1)' },
                        }}
                    />
                    <VictoryCandlestick
                        candleColors={{ positive: 'green', negative: 'red' }}
                        data={cryptoData}
                        x="x"
                        open="open"
                        close="close"
                        high="high"
                        low="low"
                        labelComponent={<VictoryTooltip />}
                        style={{
                            data: {
                                stroke: ({ datum }) => (datum.open > datum.close ? 'red' : 'green'), // Conditional stroke color
                                strokeWidth: 0.75,
                            },
                        }}
                    />
                </VictoryChart>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CandlestickChart;
