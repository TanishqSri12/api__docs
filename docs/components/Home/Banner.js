import React from 'react'
import styles from '../../../src/css/banner.module.css'
import Link from '@docusaurus/Link'

const Banner = () => {
  return (
    <div className={styles.banner__container}>
      <div className={styles.banner__text}>
        <h2>API Docs</h2>
        <p>
        API documentation provides detailed guidelines and references for developers to understand and use an API effectively. It includes information on authentication, endpoints, request and response formats, error codes, and usage examples.
        </p>
        <Link className=".blue__button" to="appkit/overview">
          Start Building
        </Link>
      </div>
    </div>
  )
}

export default Banner
