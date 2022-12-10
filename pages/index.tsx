import * as styles from './styles.css';

export default function Home() {
  return (
    <nav className={styles.navbar({ kind: 'floating' })}>
      <div className={styles.container}>Navbar Elements</div>
    </nav>
  );
}
