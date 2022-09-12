import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/header-logo.png')} 
                />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image 
                        source={{
                            uri: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/FFFFFF/external-plus-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={{
                            uri: 'https://img.icons8.com/material-outlined/24/FFFFFF/filled-like.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>10</Text>
                    </View>
                    <Image 
                        style={styles.icon}
                        source={{
                            uri: 'https://img.icons8.com/material-outlined/24/FFFFFF/facebook-messenger--v1.png',
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 18,
        bottom: 15,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    }


})

export default Header