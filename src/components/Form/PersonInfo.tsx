import { ChangeEvent } from "react";

type PersonInfoFields = {
  name: string;
  email: string;
  phone: string;
}

type PersonInfoProps = {
  register: any;
  errors: any;
  updateFormFields: (fields: Partial<PersonInfoFields>) => void;
}

function PersonInfo({ register, errors, updateFormFields }: PersonInfoProps) {
  function handleUpdateFormFields(e: ChangeEvent<HTMLInputElement>) {
    updateFormFields({ [e.target.name]: e.target.value })
  }

  return (
    <div className="person-info">
      <h1 className="person-info__title">Personal Info</h1>
      <p className="person-info__desc">Please provide your name, email address, and phone number</p>

      <div className="person-info__box">
        <label className="person-info__label" htmlFor="name">Name</label>
        <input className={errors.name ? "person-info__input person-info__input--error" : "person-info__input"} id="name" name="name" type="text" onChange={handleUpdateFormFields} {...register("name")} placeholder="e.g. Stephen King" />
        <span className="person-info__error-text">{errors.name && errors.name.message}</span>
      </div>

      <div className="person-info__box">
        <label className="person-info__label" htmlFor="email">Email Address</label>
        <input className={errors.email ? "person-info__input person-info__input--error" : "person-info__input"} id="email" name="email" type="text" {...register("email")} placeholder="e.g. stephenking@lorem.com" onChange={handleUpdateFormFields} />
        <span className="person-info__error-text">{errors.email && errors.email.message}</span>
      </div>

      <div className="person-info__box">
        <label className="person-info__label" htmlFor="phone">Phone Number</label>
        <input className={errors.phone ? "person-info__input person-info__input--error" : "person-info__input"} id="phone" name="phone" type="text" {...register("phone")} placeholder="e.g. +1 234 567 890" onChange={handleUpdateFormFields} />
        <span className="person-info__error-text">{errors.phone && errors.phone.message}</span>
      </div>
      
    </div>
  )
}

export default PersonInfo