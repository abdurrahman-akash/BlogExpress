import { Post, PostWithUser, User } from '@/components/types';
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUser = async (userId: number) => {
    try {
        const response = await axios.get<User>(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};
export const fetchPosts = async () => {
    const response = await axios.get<Post[]>(`${API_BASE_URL}/posts`);
    const posts = response.data;

    const users = await Promise.all(
        posts.map(post => fetchUser(post.userId))
    );

    const postWithUser: PostWithUser[] = posts.map((post, index) => ({
        ...post,
        user: users[index]
    }));
    
    return postWithUser;
};