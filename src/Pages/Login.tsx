import LoginForm from "../Components/LoginForm"
import Page from "../Components/Page"
import Title from "../Components/Title"


function Login() {
  return (
    <Page center tailWindClass="items-center px-24">
        <Title text="Login"/>
        <p>Welcome back</p>
        <LoginForm />
    </Page>
  )
}

export default Login