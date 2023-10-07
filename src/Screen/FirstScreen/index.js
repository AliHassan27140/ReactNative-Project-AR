import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';
import Color from '../../utils/constants';
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: Color.WHITE,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    backgroundColor: Color.WHITE,
    alignItems: 'center',
  },
  text: {
    color: Color.GRAY,
    lineHeight: 40,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  text1: {
    color: Color.GRAY,
    lineHeight: 40,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

function FirstScreen() {
  return (
    <>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome to </Text>
          <Text style={styles.text1}>BudgetMe!</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              // color: Color.GRAY,
              fontWeight: '500',
              marginTop: 30,
              lineHeight: 24,
            }}>
            Discover deals and shop confidently. Find local stores, compare
            prices, and save time and money on your purchases.
          </Text>
          <Image
            style={{marginTop: 10}}
            source={require('../../assets/images/pic1.png')}
          />
        </View>

        <View style={styles.slide1}>
          <Text style={styles.text}>Effortless</Text>
          <Text style={styles.text1}>Savings!</Text>
          <Text
            style={{
              textAlign: 'center',

              fontSize: 16,
              // color: Color.GRAY,
              fontWeight: '500',
              marginTop: 30,
              lineHeight: 24,
            }}>
            Effortless savings at your fingertips. Explore stores, compare
            prices, and tailor shopping lists to your needs for smart shopping.
          </Text>
          <Image
            style={{marginTop: 10}}
            source={require('../../assets/images/pic2.png')}
          />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Stay Informed,</Text>
          <Text style={styles.text1}>Shop Smart</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              // color: Color.GRAY,
              fontWeight: '500',
              marginTop: 30,
              lineHeight: 24,
            }}>
            Discover deals and shop confidently. Find local stores, compare
            prices, and save time and money on your purchases.
          </Text>
          <Image
            style={{marginTop: 10}}
            source={require('../../assets/images/picc4.png')}
          />
        </View>
      </Swiper>
      <TouchableOpacity
        style={{
          height: 50,
          alignSelf: 'center',
          width: '95%',

          marginBottom: 40,
          justifyContent: 'center',
          backgroundColor: Color.PRIMARY,
          borderRadius: 12,
          elevation: 8,
        }}>
        <Text style={{textAlign: 'center', fontSize: 16, color: Color.WHITE}}>
          Next
        </Text>
      </TouchableOpacity>
    </>
  );
}
export {FirstScreen};
