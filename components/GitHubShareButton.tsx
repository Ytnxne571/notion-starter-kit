import { useState } from 'react';
import styles from './GitHubShareButton.module.css';

export const GitHubShareButton: React.FC = () => {
  // 初始值为 false，表示图标不可见
  const [visible, setVisible] = useState(false);

  return (
    <a
      href='https://github.com/transitive-bullshit/nextjs-notion-starter-kit'
      target='_blank'
      rel='noopener noreferrer'
      className={styles.githubCorner}
      aria-label='View source on GitHub'
      style={{
        visibility: visible ? 'visible' : 'hidden',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s linear'
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 250 250'
        style={{ fill: '#70B7FD', color: '#fff', position: 'absolute' }}
      >
        {/* 这里是 Github 圆角图标的矢量图形代码 */}
      </svg>
    </a>
  );
};

      
