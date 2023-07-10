import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

LoginPage.propTypes = {
  loginData: PropTypes.array,
}

function LoginPage({ loginData }) {
  return (
    <>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </>
  )
}
export default LoginPage
