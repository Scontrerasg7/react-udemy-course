import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  })


  const {username, email, password} = formState;

  

  useEffect( () => {
    // console.log('useEffect called')
  }, []);
  useEffect( () => {
    // console.log('formState changed')
  }, [formState]);
  useEffect( () => {
    // console.log('email changed')
  }, [email]);

  return (
    <>
      <h1>Formulariro con Custom Hook</h1>
      <hr/>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="username@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>

    </>
  )
}
