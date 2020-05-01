export default function siteHeader() {
  return (
    <footer>
      <p>
        questions or comments?<br />
      write to <a href="mailto:wallycoyote@protonmail.com">wallycoyote@protonmail.com</a>
      </p>
      <style jsx>{`
        footer {
          width: 100%;
          background-color: var(--headerbg);
          color: var(--active_outline);
          display: flex;
          flex: 0 0 80px;
          justify-content: center;
          align-items: center;
          text-align:center;
        }
        a, a:visited {
          color: var(--active_outline);
          text-decoration: none;
        }
        a:hover {
          color: var(--punc);
        }
      `}</style>
    </footer>
  )
}