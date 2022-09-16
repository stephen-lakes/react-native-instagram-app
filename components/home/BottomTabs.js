import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
                source={{ uri: activeTab === icon.name ? icon.active : icon.inactive  }}
                style={[styles.icon,
                    icon.name === "Profile" ? styles.profilePic() : null,
                    activeTab === "Profile" && icon.name === activeTab 
                    ? styles.profilePic(activeTab)
                    : null
                ]}
            />
        </TouchableOpacity>
    )

  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            {icons.map((icon, index)=>(
                <Icon key={index} icon={icon} />
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: 'gray'
    },
    icon: {
        width: 30, height: 30,
    },
    profilePic: (activeTab = '')=> ({
        borderRadius: 50,
        borderWidth: activeTab === "Profile" ? 2 : 0,
        borderColor: '#fff',}
    ),
    wrapper: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
        backgroundColor: '#000',
        zIndex: 999,
    },
})

export default BottomTabs