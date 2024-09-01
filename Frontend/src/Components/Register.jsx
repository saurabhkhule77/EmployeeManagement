const Register = () => {
  return (
    <>
      <div className="container">
        <form>
          <label className="form-label">Name</label>
          <input className="form-control" type="text" />
          <label className="form-label">Email</label>
          <input className="form-control" type="email" />
          <label className="form-label">Password</label>
          <input className="form-control" type="password" />

          <button type="submit" className="btn btn-primary"></button>
        </form>
      </div>
    </>
  );
};
export default Register;
