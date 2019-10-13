// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

// class Question extends Component {

//     constructor() {
//         super();
//         this.state = {

//         }
//     }

//     componentDidMount() {
//         this.animateheight();
//     }
//     _animatedheight = new Animated.Value(0);

//     animateheight = () => {
//         const height=Dimensions.get('window').height
//         Animated.timing(this._animatedheight,{
//             toValue:height,
//             duration:11000
//         }).start();

//     }

//     renderheight() {
//         // if(this._animateheight)
//         this._animatedheight.setValue(0)
//         this.animateheight();
//     }

//     render() {

//         const { container, view, otherview } = styles

//         return (
//             <View style={container}>
//                 <Animated.View style={[ view , { height: this._animatedheight }]}>
//                 </Animated.View>
//                 <View style={otherview}>
//                     <Text>testing if this crazy thing will work</Text>
//                     <TouchableOpacity onPress={() => this.renderheight()} style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <Text>click me</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }

// export default Question;

// const styles = {
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         // padding: 5
//     },
//     view: {
//         backgroundColor: '#cccccc99',
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     otherview: {
//         position: 'absolute',
//         // marginTop: 260,
//         alignItems: 'center'
//     }
// }