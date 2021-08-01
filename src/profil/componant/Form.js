 import Photo from './Photo.jpg'
 const photo ={
    borderRadius : '50%',
    boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',

 }
const Form = () => {
    return (
        <div className ='App'> 
        
        <h3> Se connecter en tant que Éco Friends</h3>
        <img src={Photo} alt="eco" width="100" height="100" style={photo}/>

        <br/><br/>
          <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" > envoyer</button>
</form>
           
      </div>
      
    )
}
export default Form;
