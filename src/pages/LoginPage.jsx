import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  NavLink,
  redirect,
  useNavigation,
  useSubmit,
} from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LoginPage() {
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
