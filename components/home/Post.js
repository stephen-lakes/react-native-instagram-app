import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
        imageUrl: 'https://img.icons8.com/external-outline-juicy-fish/24/FFFFFF/external-send-contact-us-outline-outline-juicy-fish.png'
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/FFFFFF/external-Save-social-media-bearicons-detailed-outline-bearicons.png'
    }
]

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <Text style={styles.divider}></Text>
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <PostFooter />
            <Likes post={post} />
            <Caption post={post} />
            <CommentSection post={post} />
        </View>
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

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={ styles.leftFooterIconsContainer }>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Image source={{ uri: postFooterIcons[3].imageUrl }} style={{ width: 24, height:24 }} />
        </View>
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text  style={{ color: '#fff', fontWeight: '700' }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <Text style={{ color: '#fff' }}>
        <Text style={{ fontWeight: '700' }}>{ post.user }</Text>
        <Text>  { post.caption }</Text>
    </Text>
    
)

const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        { post.comments.length > 0 &&(
            <Text style={{ color: 'gray' }}>
                View{' '}{post.comments.length > 1 ? 'all ' : ''}
                {post.comments.length}
                { post.comments.length > 1 ? ' Comments' : ' Comment'}
            </Text>
        )}
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
    footerIcon: {
        width: 24,
        height: 24,
    },
    leftFooterIconsContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})


export default Post