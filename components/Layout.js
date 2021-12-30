import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>List of</span>
              <span>Investment Banking firms</span>
            </h1>
            <h2>Check this blog</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 @ Abheet Singh  :)</p>
      </footer>
    </div>
  )
}