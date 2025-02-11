import React from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

const typeToImageMap = {
  react: 'assets/home/CURL-Logo.wine.png',
  nextjs: 'assets/home/Go-Logo.wine.png',
  vue: 'assets/home/java-4-logo-png-transparent.png',
  javascript: 'assets/home/javascriptLogo.png',
  ios: 'assets/home/Ruby.png',
  android: 'assets/home/nodejs.png',
  rn: 'assets/home/python-logo-only.png',
  web: 'assets/home/webLogo.png',
  flutter: 'assets/home/new-php-logo.png',
  csharp: 'assets/home/dart.png'
}

const productToLinkMap = {
  w3m: './appkit/overview',
  w3w: './walletkit/overview',
}

export const Card = ({ title, description, links, product, children, image }) => {
  return (
    <div className={`gs__wrapper gs__wrapper--${product}`}>
      <div className="gs__text-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="gs__text">{children}</div>
      <div className="gs__platform__wrapper">
        {links.map(({ type, url }) => (
          <Link key={type} className="gs__platform" to={url}>
            <img
              className="gs__platform--image"
              src={useBaseUrl(typeToImageMap[type])}
              alt={`${type} logo`}
            />
          </Link>
        ))}
        {product && (
          <Link className="gs__platform gs__platform--lm" to={productToLinkMap[product]}>
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        )}
      </div>
      <img className="gs__image" src={useBaseUrl(image)} alt="cloud illustration" />
    </div>
  )
}

export default Card
