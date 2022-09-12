import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/material-outlined/24/FFFFFF/filled-like.png',
        likedImageUrl: '',
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/FFFFFF/external-comment-ecommerce-interface-anggara-basic-outline-anggara-putra.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/external-outline-juicy-fish/60/FFFFFF/external-send-arrows-outline-outline-juicy-fish.png'
    },
    {
        name: 'Save',
        imageUrl: '"https://img.icons8.com/sf-regular/48/FFFFFF/bookmark-ribbon.png'
    }
]

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <Text style={styles.divider}></Text>
        <PostHeader post={post} />
        <PostImage post={post} />
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

const PostImage = ({ post }) => (
    <View style={{ height: 450, width: '100%'}}>
        <Image 
            source={{ uri: post.imageUrl }} 
            style={{ height: '100%', resizeMode: 'cover' }} 
        />
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