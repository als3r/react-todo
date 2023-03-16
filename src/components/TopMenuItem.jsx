function TopMenuItem({ id, title, route }) {
  return (
    <li key={id} className="top-nav__item">
      <a href={route} className="top-nav__item-link">
        {title}
      </a>
    </li>
  )
}

export default TopMenuItem
