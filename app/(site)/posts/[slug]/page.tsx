import type { Metadata, ResolvingMetadata } from 'next'
import Image from "next/image"
import Link from 'next/link'
import {PortableText} from '@portabletext/react'

// Types
import { BlogPostType } from "@/types"

// Sanity
import {useNextSanityImage} from 'next-sanity-image'
import { getBlogPost } from "@/sanity/sanity.query"
import client from "@/sanity/sanity.client"

import styles from './page.module.css'


export const revalidate = 10 // revalidate at most every hour

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const slug = params.slug
  
    // fetch data
    const post: BlogPostType = await getBlogPost(params.slug)
    console.log(post.imageUrl)
   

   
    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        images: [post.imageUrl],
      },
    }
  }

const SanityImage = (props: any) => {
    try{
        const imageProps = useNextSanityImage(client, props.value.asset);
        if (!imageProps) return null;
        
        return (<Image 
                    alt="blog image" 
                    src={imageProps['src']} 
                    width={400} 
                    height={400}
                    style={{objectFit:"cover", position:'relative',left: '50%', transform: 'translateX(-50%)'}}
                />)
    }catch(err){
        return null
    }
}

const myPortableTextComponents = {
    types: {
        image: (props: any) => <SanityImage {...props} />
    }
}

async function page({params}: {params: {slug: string}}) {
    const post: BlogPostType = await getBlogPost(params.slug)
  
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h1>{post.title}</h1>
            <p>{`${post._createdAt.slice(8,10)}/${post._createdAt.slice(5,7)}/${post._createdAt.slice(0,4)}`}</p>
            <div className={styles.mainImage}>
                {post.imageUrl && <Image 
                    src={post.imageUrl} 
                    alt={post.image.alt} 
                    fill
                    style={{objectFit:"cover"}}
                    priority
                /> }
            </div>
            <PortableText value={post.content} components={myPortableTextComponents}/>
            <Link href={'/'}>
                <button className={styles.return}>
                    Return to Homepage
                </button>
            </Link>
            
        </div>
    </section>
  )
}

export default page