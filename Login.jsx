import React from 'react';

// CSS styles converted into a JavaScript object
const styles = {
  loginContainer: {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

class Login extends React.Component {
  state = {
    isButtonHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isButtonHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isButtonHovered: false });
  };

  render() {
    return (
      <div style={styles.loginContainer}>
        <h2 style={styles.header}>Login</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Username</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input type="password" style={styles.input} />
        </div>
        <button
          style={this.state.isButtonHovered ? styles.buttonHover : styles.button}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
