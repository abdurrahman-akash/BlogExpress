import { PostList } from "@/components/posts/PostList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Latest Posts
      </h1>

      <PostList posts={[]} />
      </div>
    </main>
  );
}
