import Page from "../Components/Page"
import Title from "../Components/Title"
import UserRegistrationForm from "../Components/UserRegistrationForm"

function SignupPage() {
  return (
    <Page center tailWindClass="items-center px-24">
        <Title text="Nice to meet you!"/>
        <p className="pb-6">We're excited to have you aboard!</p>
        <UserRegistrationForm />
    </Page>
  )
}

export default SignupPage