import { BlogPostType } from '@/types';
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import styles from './BlogPostContainer.module.css'

function BlogPostContainer(props: {blogPosts: BlogPostType[]}) {
  const {blogPosts} = props;
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2 style={{marginBottom: '1rem', paddingLeft: '1rem'}}>Blog</h2>
      </div>
      <div className={styles.container}>
          {blogPosts.map((post: BlogPostType)  => (
              <BlogPostCard 
                key={post._id} 
                slug={post.slug}
                title={post.title} 
                summary={post.summary}
                image={post.imageUrl} 
                alt={''}
                date={post._createdAt}
              />
          ))}
      </div>
    </section>
    
  )
}

export default BlogPostContainer