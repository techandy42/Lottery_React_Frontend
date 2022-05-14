import logo from './logo.svg'
import './App.css'
import React from 'react'
import web3 from './web3'
import lottery from './lottery'

class App extends React.Component {
  // declare states
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: '',
  }

  async componentDidMount() {
    // do not need to specify the caller address
    // because it is provided by MetaMask
    const manager = await lottery.methods.manager().call()
    const players = await lottery.methods.getPlayers().call()
    // balance of the contract
    const balance = await web3.eth.getBalance(lottery.options.address)

    this.setState({ manager, players, balance })
  }

  onSubmit = async (event) => {
    event.preventDefault()

    const accounts = await web3.eth.getAccounts()

    this.setState({ message: 'Waiting on transaction success...' })

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether'),
    })

    this.setState({ message: 'You have been entered' })
  }

  onClick = async () => {
    const accounts = await web3.eth.getAccounts()

    this.setState({ message: 'Waiting on transaction success...' })

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    })

    this.setState({ message: 'A winner has been picked!' })
  }

  render() {
    // fetching currently connected account
    // web3.eth.requestAccounts().then(console.log)
    // fetching web3 version that the app is using
    // console.log(web3.version)

    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}, There are currently{' '}
          {this.state.players.length} people entered competing to win{' '}
          {web3.utils.fromWei(this.state.balance, 'ether')} ether!
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amout of ether to enter</label>
            <input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>

        <hr />

        <h1>{this.state.message}</h1>
      </div>
    )
  }
}
export default App
