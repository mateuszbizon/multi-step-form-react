import thanksFormImg from "../../assets/images/icon-thank-you.svg";

function ThanksForm() {
  return (
    <div className="thanks-form">
      <img className="thanks-form__img" src={thanksFormImg} alt="" />
      <h1 className="thanks-form__title">Thank you!</h1>
      <p className="thanks-form__description">Thanks for confirming your subscription! We hope you have fun using our <br /> platform. If you ever need support, <br /> please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default ThanksForm