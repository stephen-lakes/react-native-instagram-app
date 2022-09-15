import { USERS } from './users';

export const POSTS = [
    {
        imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Building a netflix clone with REACT JS. This is going to be a fun build #firebase #react #dev',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow! This build looks fire. Super excited about the build',
            },
            
        ],
    },
    {
        imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[1].user,
        likes: 9890,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'cleverqazi',
                comment: 'yo!!',
            },
            {
                user: 'amaanath.dev',
                comment: "I'M SLEEPING"
            },
        ],
    },
]