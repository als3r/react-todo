import Logo from './Logo'
import TopMenu from './TopMenu'

function Header() {
  return (
    <header>
      <div className="container navbar__container">
        <Logo />
        <TopMenu />
      </div>
    </header>
  )
}
export default Header
