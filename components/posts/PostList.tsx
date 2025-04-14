import { PostCard } from "@/components/posts/PostCard"
import React from "react"
import { PostWithUser } from "@/components/types/index"

interface PostListProps {
    posts: PostWithUser[];
}

export const PostList = ({ posts }: PostListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
    )
}