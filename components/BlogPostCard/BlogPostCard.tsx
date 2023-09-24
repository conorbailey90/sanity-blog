import Link from "next/link"
import Image from "next/image"
import styles from './BlogPostCard.module.css'

type CardProps = {
    title: string,
    slug: {current: string},
    summary: string,
    image: string,
    alt: string,
    date: string
}

function BlogPostCard(props: CardProps) {
  return (
    
    <>
        <div className={styles.card}>
            <div className={styles.postInfo}>
              <div style={{flex: '1'}}>
                <h4>{props.title}</h4>
                <p style={{fontSize: '.7rem', opacity: '.7'}}>{`${props.date.slice(8,10)}/${props.date.slice(5,7)}/${props.date.slice(0,4)}`}</p>
                <p> {props.summary}</p>
              </div>
    
              <Link href={`posts/${props.slug.current}`}>
                <button className={styles.button}>
                  Read
                </button>
              </Link>
            </div>
            
            {props.image && 
              <div className={styles.postImage}>
                <Image 
                  src={props.image} 
                  alt={props.alt} 
                  fill
                  style={{objectFit: 'cover'}}
                /> 
              </div>
            } 
        </div>
    </>
  )
}

export default BlogPostCard