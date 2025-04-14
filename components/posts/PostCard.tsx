import Link from "next/link";
import { Heart } from "lucide-react";
import { PostWithUser } from "@/components/types/index";
import Image from "next/image";

interface PostCardProps {
  post: PostWithUser;
}

export function PostCard({ post }: PostCardProps) {
  if (!post.user) {
    return null; // Handle the case where post.user is undefined
  }

  const fakeAvatar = `https://i.pravatar.cc/150?u=${post.user.id}`; // Dummy avatar
  const createdAt = new Date().toLocaleDateString(); // Dummy date
  const likes = Math.floor(Math.random() * 100); // Dummy likes
  const description = post.body.slice(0, 100) + '...'; // First 100 chars

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Link href={`/author/${post.user.id}`}>
            <Image
              src={fakeAvatar}
              alt={post.user.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full mr-3"
            />
          </Link>
          <div>
            <Link
              href={`/author/${post.user.id}`}
              className="text-white font-medium hover:text-blue-400"
            >
              {post.user.name}
            </Link>
            <p className="text-gray-400 text-sm">{createdAt}</p>
          </div>
        </div>
        <Link href={`/post/${post.id}`}>
          <h2 className="text-xl font-bold text-white mb-2 hover:text-blue-400">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center text-gray-400">
          <Heart className="w-5 h-5 mr-1" />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}
