import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// LoginForm.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// }

function LoginForm() {
  const navigate = useNavigate()

  function handleLoginFormSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    const username = formProps?.username
    const password = formProps?.password

    console.log(username, password, username === 'demo' && password === 'demo')

    if (username === 'demo' && password === 'demo') {
      setIsError(false)
      navigate('/tasklist/1')
    }
    setIsError(true)
    return false
  }

  const [isError, setIsError] = useState(false)

  return (
    <div className="login-form__container">
      <div className="login">
        <form
          method="post"
          action=""
          className="form login-form"
          onSubmit={handleLoginFormSubmit}
        >
          <div>
            <h4 className="form-header">LOGIN</h4>
          </div>
          <div className="form-group">
            <div className="form-label-container">
              <label htmlFor="username" className="form-label">
                Username or email address
              </label>
            </div>
            <div className="form-input-container">
              <input
                id="username"
                type="text"
                name="username"
                className={
                  isError
                    ? 'form-input login-form__username-input form-input--error'
                    : 'form-input login-form__username-input'
                }
                placeholder="demo"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-container">
              <label htmlFor="username" className="form-label">
                Password
              </label>
            </div>
            <div className="form-input-container">
              <input
                type="password"
                name="password"
                className={
                  isError
                    ? 'form-input login-form__password-input form-input--error'
                    : 'form-input login-form__password-input'
                }
                placeholder="demo"
              />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
