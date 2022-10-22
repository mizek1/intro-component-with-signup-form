import '../styles/form.less';

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button type="submit">Claim your free trial</button>
      <p>
        By clicking the button, you are agreeing to our{' '}
        <a href="#">Terms and Services</a>
      </p>
    </form>
  );
}
