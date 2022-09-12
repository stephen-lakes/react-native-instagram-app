import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <Text style={styles.divider}></Text>
        <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({ post }) =>(
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
        }}
    >
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{ color: '#fff', marginLeft: 5, fontWeight: '700' }}>{ post.user }</Text>
        </View>
        <View style={{ color: 'white', fontWeight: '900'}}>...</View>
    </View>
)

const styles = StyleSheet.create({
    divider: {
        borderWidth: 1,
        borderColor: '#A9A9A9',
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 2,
        borderColor: '#FF8501',
    },

})


export default Post