# Lottery React App

### This is the React frontend code for the lottery dApp.

---

> Set-Up

```bash
npx create-react-app lottery-react
npm i web3
```

Inside App.js, replace to following code:

```javascript
import logo from './logo.svg'
import './App.css'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}
export default App
```

---

> web3.js recent version setup

Use the following code:

```javascript
import Web3 from 'web3'

window.ethereum.request({ method: 'eth_requestAccounts' })

const web3 = new Web3(window.ethereum)

export default web3
```

---

> Changes

- The following changes must be made to make web3 compatible with React

- Change `"react-scripts": "5.0.1"` to `"react-scripts": "4.0.3"`
- Run the following commands

```bash
rm -r node_modules
rm package-lock.json
npm install
# you may need to run npm install multiple times until it works
```

---

> Updating to Solc v0.8.9

- refer to [Solidity Tutorial no.113](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/learn/lecture/30032924#notes)

---
