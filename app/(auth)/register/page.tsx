import RegisterForm from "@/components/Global/Register/registerform";
import Logo from "@/components/ui/logo";

// Brand Name
const Name = () => (
  <span className="text-2xl font-bold text-[#FACC15] ml-3">Quizzy</span>
);

const SignupPage = () => {
  return (
    <RegisterForm />
  );
};

export default SignupPage;
