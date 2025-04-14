import { Author, Post } from '../types';

export const authors: Author[] = [
    {
        id: '1',
        name: 'Wade Warren',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        role: 'Software Developer'
    },
    {
        id: '2',
        name: 'Leonard Isom',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        role: 'Medical Assistant'
    },
    {
        id: '3',
        name: 'Savannah Nguyen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        role: 'UI Designer'
    },
    {
        id: '4',
        name: 'Eleanor Pena',
        avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop',
        role: 'Data Scientist'
    },
    {
        id: '5',
        name: 'Darlene Robertson',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
        role: 'Product Manager'
    },
    {
        id: '6',
        name: 'Guy Hawkins',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
        role: 'DevOps Engineer'
    },
    {
        id: '7',
        name: 'Courtney Henry',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
        role: 'Marketing Specialist'
    },
    {
        id: '8',
        name: 'Ronald Richards',
        avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop',
        role: 'Cybersecurity Analyst'
    }
];

export const posts: Post[] = [
    {
        id: '1',
        title: 'Web Design templates Selection',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: authors[0],
        createdAt: 'July 17, 2024',
        likes: 34,
        comments: [
            {
                id: '1',
                content: 'Great article!',
                author: authors[1],
                createdAt: '2 hours ago'
            }
        ]
    },
    {
        id: '2',
        title: 'Understanding TypeScript Generics',
        description: 'A comprehensive guide to mastering generics in TypeScript.',
        content: 'Generics provide a way to make components work with any data type and are a powerful feature of TypeScript. In this article, we will explore how to use generics effectively.',
        author: authors[2],
        createdAt: 'August 5, 2024',
        likes: 56,
        comments: [
            {
                id: '2',
                content: 'This was very helpful, thanks!',
                author: authors[0],
                createdAt: '1 day ago'
            },
            {
                id: '3',
                content: 'I love how you explained generics!',
                author: authors[1],
                createdAt: '3 hours ago'
            }
        ]
    },
    {
        id: '3',
        title: 'The Future of UI Design',
        description: 'Exploring the trends and technologies shaping the future of user interface design.',
        content: 'UI design is constantly evolving. In this article, we will discuss the latest trends, tools, and techniques that are shaping the future of UI design.',
        author: authors[1],
        createdAt: 'September 10, 2024',
        likes: 78,
        comments: [
            {
                id: '4',
                content: 'Very insightful!',
                author: authors[2],
                createdAt: '5 hours ago'
            }
        ]
    },
    {
        id: '4',
        title: 'Introduction to Machine Learning',
        description: 'A beginner-friendly guide to understanding machine learning concepts.',
        content: 'Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data. This article introduces the basics of machine learning.',
        author: authors[3],
        createdAt: 'October 1, 2024',
        likes: 45,
        comments: []
    },
    {
        id: '5',
        title: 'Product Management Best Practices',
        description: 'Tips and tricks for effective product management.',
        content: 'Product management involves planning, developing, and managing products. This article shares best practices for successful product management.',
        author: authors[4],
        createdAt: 'October 15, 2024',
        likes: 67,
        comments: []
    },
    {
        id: '6',
        title: 'DevOps in Modern Software Development',
        description: 'How DevOps is transforming the software development lifecycle.',
        content: 'DevOps is a set of practices that combines software development and IT operations. This article explores the benefits of adopting DevOps.',
        author: authors[5],
        createdAt: 'November 1, 2024',
        likes: 89,
        comments: []
    },
    {
        id: '7',
        title: 'Marketing Strategies for Startups',
        description: 'Effective marketing strategies to grow your startup.',
        content: 'Marketing is crucial for the success of any startup. This article discusses strategies to attract and retain customers.',
        author: authors[6],
        createdAt: 'November 10, 2024',
        likes: 54,
        comments: []
    },
    {
        id: '8',
        title: 'Cybersecurity Essentials',
        description: 'Protecting your digital assets in the modern world.',
        content: 'Cybersecurity is more important than ever. This article covers the essentials of protecting your data and systems.',
        author: authors[7],
        createdAt: 'November 20, 2024',
        likes: 72,
        comments: []
    },
    // Add 12 more posts here following the same structure
];