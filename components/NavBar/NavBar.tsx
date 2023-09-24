import { getProfile } from '@/sanity/sanity.query';
import styles from './NavBar.module.css'
import { ProfileType } from '@/types';
import Link from 'next/link';

async function NavBar() {
  const profile: ProfileType[] = await getProfile();
  const name = profile[0].fullName;
  return (
    <header className={styles.header}>
        <div className={styles.container}>
          <Link href={'/'}>
            <h5>{name}</h5>
          </Link>
        </div>
    </header>
  )
}

export default NavBar