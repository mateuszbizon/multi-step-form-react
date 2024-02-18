type PersonInfoProps = {
  register: any;
  errors: any;
}

function PersonInfo({ register, errors }: PersonInfoProps) {
  return (
    <div className="person-info">
      <h1 className="person-info__title">Personal Info</h1>
      <p className="person-info__desc">Some description</p>
      <div className="person-info__box">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...register("name")} placeholder="e.g. Stephen King" />
        <span>{errors.name && errors.name.message}</span>
      </div>
      <div className="person-info__box">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="text" {...register("email")} placeholder="e.g. stephenking@lorem.com" />
        <span>{errors.email && errors.email.message}</span>
      </div>
      <div className="person-info__box">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" {...register("phone")} placeholder="e.g. +1 234 567 890" />
        <span>{errors.phone && errors.phone.message}</span>
      </div>
    </div>
  )
}

export default PersonInfo