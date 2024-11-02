// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isFirstnameEmpty: false,
    isLastnameEmpty: false,
    isFormSubmitted: false,
  }

  onSubmitForm = () => {
    const {firstname, lastname} = this.state
    if (firstname === '') {
      this.OnBlurFirstname()
    }
    if (lastname === '') {
      this.OnBlurLastname()
    }
    if (firstname !== '' && lastname !== '') {
      this.setState({isFormSubmitted: true})
    }
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  OnBlurFirstname = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({isFirstnameEmpty: true})
    } else {
      this.setState({isFirstnameEmpty: false})
    }
  }

  OnBlurLastname = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({isLastnameEmpty: true})
    } else {
      this.setState({isLastnameEmpty: false})
    }
  }

  renderFirstnameField = () => {
    const {firstname, isFirstnameEmpty} = this.state
    const errorField = isFirstnameEmpty ? 'error-field' : ''
    return (
      <>
        <label htmlFor="firstname" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className={`input-field ${errorField}`}
          value={firstname}
          onBlur={this.OnBlurFirstname}
          onChange={this.onChangeFirstname}
        />
      </>
    )
  }

  renderLastnameField = () => {
    const {lastname, isLastnameEmpty} = this.state
    const errorField = isLastnameEmpty ? 'error-field' : ''
    return (
      <>
        <label htmlFor="lastname" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={`input-field ${errorField}`}
          value={lastname}
          onBlur={this.OnBlurLastname}
          onChange={this.onChangeLastname}
        />
      </>
    )
  }

  onClickSubmitAnotherResponseBtn = () => {
    this.setState({isFormSubmitted: false})
  }

  renderSuccessSubmitPage = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-heading">Submitted Successfully</p>
      <button
        className="success-submit-btn"
        type="button"
        onClick={this.onClickSubmitAnotherResponseBtn}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderRegistrationPage = () => {
    const {isFirstnameEmpty} = this.state
    const {isLastnameEmpty} = this.state

    return (
      <form className="form-container">
        <div className="input-container">{this.renderFirstnameField()}</div>
        {isFirstnameEmpty && <p className="error-msg-styles">Required</p>}
        <div className="input-container">{this.renderLastnameField()}</div>
        {isLastnameEmpty && <p className="error-msg-styles">Required</p>}
        <button className="button" type="button" onClick={this.onSubmitForm}>
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <div className="registration-card">
          {isFormSubmitted
            ? this.renderSuccessSubmitPage()
            : this.renderRegistrationPage()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
