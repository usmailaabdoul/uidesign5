import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, NativeModules, LayoutAnimation, Dimensions } from 'react-native';

import styles from './Landing.style';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const textArray = [
    { question: 'She went _____ the store', answer1: 'to', answer2: 'too' },
    { question: 'Is animating in RN easy?', answer1: 'u smoke something if u thing its easy', answer2: "Ano want even answer u" },
    { question: '______ book is this?', answer1: 'Whoos', answer2: "who's" },
    { question: 'Difference Between states and props', answer1: 'Ano know me', answer2: 'Ask Goolge :-)' },
];

class Landing extends Component {

    constructor() {
        super();
        this.state = {
            textIdx: 0,
            slideValue: 0,
            incrementColor: 0,
            decrementColor: 10,
        };
    }
    componentDidMount() {
        this.animateheight();
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx: currentIdx + 1 });
            this.handleColors()
            this._animatedheight.setValue(0)
            this.animateheight();
        }, 13000);
    }
    _animatedheight = new Animated.Value(0);

    componentDidUpdate() {
        LayoutAnimation.spring();
    }
    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    animateheight = () => {
        const height = Dimensions.get('window').height
        Animated.timing(this._animatedheight, {
            toValue: height,
            duration: 15000
        }).start();

    }
    handleColors = () => {
        this.setState({ incrementColor: this.state.incrementColor + 1 })
        this.setState({ decrementColor: this.state.decrementColor - 1 })

        if (this.state.decrementColor <= 1) {
            this.setState({ decrementColor: this.state.decrementColor * 0 })
        }
    }

    renderFirstColor() {
        if (this.state.incrementColor == 0) {
            return null
        } else {
            return (
                <View style={{ backgroundColor: '#00aeef', padding: 3, flex: this.state.incrementColor }}>
                </View>
            )
        }
    }
    renderSecondColor() {
        if (this.state.decrementColor == 0) {
            return null
        } else {
            return (
                <View style={{ backgroundColor: '#ebedf0', padding: 3, flex: this.state.decrementColor }}>
                </View>
            )
        }
    }

    render() {

        let textThatChanges = textArray[this.state.textIdx % textArray.length];

        return (
            <View style={styles.mainstyle}>
                <View style={{width: '100%', paddingTop: 25, position: 'absolute'}}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, }}>
                        {this.renderFirstColor()}
                        {this.renderSecondColor()}
                    </View>
                </View>
                <Animated.View style={[styles.backgroundanimestyle, { height: this._animatedheight }]}>
                </Animated.View>
                <View style={styles.mainBodyWrapperstyle}>
                    <View style={styles.bodystyle}>
                        <View style={styles.questionstyle}>
                            <Text style={styles.questionTextstyle}>{textThatChanges.question}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonstyle}>
                            <Text style={styles.buttontextstyle}>{textThatChanges.answer1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonstyle}>
                            <Text style={styles.buttontextstyle}>{textThatChanges.answer2}</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.footerstyle}>
                        <Text style={styles.footerTextstyle}>I don't know</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Landing;
