import SignIn from "@/components/SignIn";

const SignInPage = () => {
  /**
   * if(isAuth) redirect '/'
   */

  return (
    <div className="py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Internal Books
        </h2>
      </div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
