import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-2xl p-4 m-4">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-4 ml-10 rounded-lg"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-4 rounded-lg  "
          placeholder="message"
        />
        <Button variant="contained" className="pl-2">Submit</Button>
      </form>
    </div>
  );
};
export default Contact;
