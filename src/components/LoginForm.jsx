import PropTypes from 'prop-types'

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}

function LoginForm({ setIsLoggedIn }) {
  function handleLoginFormSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    const username = formProps?.username
    const password = formProps?.password

    console.log(username, password, username === 'demo' && password === 'demo')

    if (username === 'demo' && password === 'demo') {
      setIsLoggedIn(true)
    }
  }

  return (
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
          <div className="form-label">
            <label htmlFor="username" className="">
              Username or email address
            </label>
          </div>
          <div className="form-input">
            <input
              id="username"
              type="text"
              name="username"
              className="form-input login-form__username-input"
              placeholder="demo"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-label">
            <label htmlFor="username">Password</label>
          </div>
          <div className="form-input">
            <input
              type="password"
              name="password"
              className="form-input login-form__password-input"
              placeholder="demo"
            />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
