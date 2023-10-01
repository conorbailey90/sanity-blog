import { getProfile, getBlogPosts } from "@/sanity/sanity.query";
import type { ProfileType, BlogPostType } from "@/types";
//Components

import Hero from "@/components/Hero/Hero";
import BlogPostContainer from "@/components/BlogPostContainer/BlogPostContainer";

export const revalidate = 10 // revalidate at most every hour


import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Nigel Herrera\'s Blog',
  description: 'Welcome to my blog!',
}
 

export default async function Home() {
  const profile: ProfileType[] = await getProfile();
  const blogPosts: BlogPostType[] = await getBlogPosts()
 
  return (
    <main>
      <section style={{minHeight: 'calc(100vh - 300px)'}}>
        <div>
          <Hero profile={profile[0]}/>
          <BlogPostContainer blogPosts={blogPosts} />
        </div>
      </section>
    </main>
  );
}