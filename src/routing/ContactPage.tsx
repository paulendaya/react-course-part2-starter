import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  // use useNavigate to navigate to other routes without using the <Link> component

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Redirect the user to the home page
        navigate("/");
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;
