import { ProfileType } from '@/types';
import styles from './Footer.module.css'
import { getProfile } from '@/sanity/sanity.query';

export default async function Footer() {
  const profile: ProfileType[] = await getProfile();
  const name = profile[0].fullName;
  const email = profile[0].email;
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            
            <h5>© {name} {new Date().getFullYear()}</h5>
            <h5>Email: <a target='__blank' href={`mailto:${email}`}>{email}</a> </h5>
        </div>
        
    </footer>
  )
}
