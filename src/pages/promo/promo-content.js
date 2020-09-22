import React from "react";
import { Link } from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReactModal from 'react-modal'

//const PromoContent = ({ data }) => {
export default class PromoContent extends React.Component {
  
  state = {
    email: "",
    modelOpen: false,
    emailRegSuccess: false,
    emailRegMsg: "",
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
    addToMailchimp(this.state.email)
      .then(data => {

        this.setState({ modelOpen: true })
        this.setState({ emailRegMsg: data.msg })

        if (data.result == "error")
        {
          this.setState({ emailRegSuccess: false })
        }
        else
        {
          this.setState({ emailRegSuccess: true })
        }
      })
      .catch(() =>{

      })
  }

  handleModalClose = event => {
    this.setState({ modelOpen: false })
  }

  render () {

    var showModalClassName = this.state.modelOpen ? "openSignUpConfirmModal" : "closedSignUpConfirmModal"
    var title = this.state.emailRegSuccess ? "More instructions!" : "There was an error"
    var msg = this.state.emailRegSuccess ? "2.5 An confirmation email has been dispached, please confirm your sign up" : this.state.emailRegMsg

    return ( 
      <>
        <div className="openSignUpConfirmModalRoot">
          <div 
            className={showModalClassName}
            //={this.state.modelOpen}
            onRequestClose={this.handleModalClose}
            contentLabel="Example Modal In Gatsby"
          >
            <h3>{msg}</h3>
            <br />
            <Link className="closeButton" onClick={ (event) =>
              {
                this.handleModalClose()
                event.preventDefault()}
              }>
              Close
            </Link>
           </div>
        </div>

        <h3 className="instructionPoint">1. Read this</h3>
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
        <br />

        <h3 className="instructionPoint">2. Sign up to our newsletter</h3>
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
        <br />
        
        <h3 className="instructionPoint">3. Follow us on twitter</h3>
        <a href="https://twitter.com/theknackelibang">
          <section className="twitterIconInstructionsFrame">
          <svg className="twitterIconInstructions" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </section>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h3 className="instructionPoint">4. Look at these pleasant pictures depicting the game</h3>
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
        <br />

        <h3 className="instructionPoint">5. Await further instructions and don't drown in a pool</h3>

        <br />
        <br />
        <br />
        <img src="/img/crawler_01.png" alt="" className="promoContentFootImage" />
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
