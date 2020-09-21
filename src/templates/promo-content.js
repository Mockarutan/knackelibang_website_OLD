import React from "react";

//const PromoContent = ({ data }) => {
export default class PromoContent extends React.Component {
  
  state = {
    email: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    alert(`Request Confirmed!`)
  }

  render () {
    return ( 
      <> 
        <h3 className="instructionPoint">1. READ THIS</h3>
        <p className="gameDescriptionShort">
          <b className="gameDestTitle">JUST READ THE INSTRUCTIONS</b> is a co-op first person shooter game where the only thing that matters is
          the next set of instructions and you following them. Enemies will flood
          the scene, your weapons will break, more instructions will come, and then
          repeat.
          <br />
          <br />
          <p>Aspire to not die.</p>
        </p>
        
        <br />
        <h3 className="instructionPoint">2. SIGN UP TO OUR NEWSLETTER</h3>
        <p className="shameNote">(shame us on twitter if we spam you)</p>
        
        <form className="emailInput" onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="SIGN UP" />
        </form>
        <br />
        
        <h3 className="instructionPoint">2. FOLLOW US ON TWITTER</h3>

        <a href="https://twitter.com/theknackelibang">
          <img style={{width: 46, height: 46, float: 'left', position: 'relative', 'margin-left': '2em' }}
           src="/img/twitter_promo_logo.png" className="twitterIconInstructions" />
        </a>

        <br />
        <br />
        <br />
        <br />
        <h3 className="instructionPoint">4. LOOK AT THESE PLEASANT PICTURES DEPICTING THE GAME</h3>
        <section className="promoContentGrid">
          <a href="/img/Screenshot_01.png">
            <img src="/img/Screenshot_01.png" alt="" />
          </a>
          <a href="/img/Screenshot_02.png">
            <img src="/img/Screenshot_02.png" alt="" />
          </a>
          <a href="/img/Screenshot_03.png">
            <img src="/img/Screenshot_03.png" alt="" />
          </a>
        </section>

        <br />
        <h3 className="instructionPoint">5. AWAIT FURTHER INSTRUCTIONS AND DON'T DROWN IN A POOL</h3>
        <img  style={{width: 200, height: 200, float: 'left', position: 'relative', 'margin-left': '2em' }}
          src="/img/kotd_logo_inverted_without_title.png" alt="" />
      </>
    )
  }
};

//export default PromoContent;

// > **JUST READ THE INSTRUCTIONS**
// >
// >
// >
// >

// ****

// <form action="/action_page.php">
// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// <input type="text" id="email" name="email" placeholder="Email Address" />
// <input type="submit" value="Sign up">
// </form>
// </br>

// **3. Follow us on twitter**
// <img src="/img/twitter_promo_logo.png" />

// **4. Look at these pleasant pictures depicting the game**

// <table>
//   <tr>
//     <td valign="top" style="width:500px;"><img src="/img/Screenshot_01.png"></td>
//     <td valign="top" style="width:500px;"><img src="/img/Screenshot_02.png"></td>
//     <td valign="top" style="width:500px;"><img src="/img/Screenshot_03.png"></td>
//   </tr>
//  </table>

// **5. Await further instructions and don't drown in a pool**

// ![](/img/kotd_logo_without_title.png)
