import { food } from "./food";
import { users } from "./users";

export const posts = [
    {
        imageUrl: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
        user: users[0].user,
        partner: 'metropolissarajevo',
        likes: 197,
        caption: '#food #freeTime #amazingFood',
        profilePicture: users[0].image,
        coments: [
            {
                user: 'mahirk0',
                comment: 'Wow odlicno!'
            },
            {
                user: 'nekkyc7',
                comment: 'Prelijepo'
            },
            {
                user: 'nejracoric',
                comment: 'Sigurno je veoma ukusno'
            },
            {
                user: 'nedim',
                comment: 'Wow!!!!!!'
            },
            {
                user: 'mahir',
                comment: 'Amazing'
            },
        ]
    },

    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSeU9q8KY7QiUAZAophkiOfW7nCXM6Fkuzw&s',
        user: users[1].user,
        partner: 'metropolissarajevo',
        likes: 197,
        caption: 'Moje omiljeno jelo. #uzivanje',
        profilePicture: users[1].image,
        coments: [
            {
                user: 'nekkyc7',
                comment: 'Preukusno izgleda'
            },
            {
                user: 'nejracoric',
                comment: 'WOOOWWW!!!'
            },
        ]
    },

    {
        imageUrl: 'https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2024/instant-soup-with-noodles.jpg?sc_lang=en',
        user: users[2].user,
        partner: 'metropolissarajevo',
        likes: 197,
        caption: '#asianFood',
        profilePicture: users[2].image,
        coments: [
            {
                user: 'nejra',
                comment: 'Odlicno'
            },
        ]
    },

    {
        imageUrl: 'https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/food-photographer-ideas.jpg',
        user: users[3].user,
        partner: 'metropolissarajevo',
        likes: 197,
        caption: 'Piza Day!',
        profilePicture: users[3].image,
        coments: [
            {
                user: 'nejracoric',
                comment: 'Super'
            },
        ]
    },
]