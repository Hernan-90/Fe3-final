import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    questions: "",
  });

  const [error, setError] = useState()
  const [success, setSuccess] = useState()

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName.length >= 5 && emailRegex.test( formData.email )) {
      setFormData({ ...formData });
      setSuccess(true)
      setError(false)
      console.log("Datos enviados:", `${formData.fullName}, ${formData.email}, ${formData.questions}`);
    } else {
      setError(true)
      setSuccess(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-items">
        <input className="form-input" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="name"/>
        <label className="form-label">Nombre completo:</label>
      </div>
      <div className="form-items">
        <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email"/>
        <label className="form-label">Email:</label>
      </div>
      <div className="form-textarea">
        <label className="form-label">Preguntas:</label>
        <textarea name="questions" value={formData.questions} onChange={handleChange} />
      </div>
      <div className="form-validations">
        { error && <small className="validation">Por favor verifique su información nuevamente</small> }
        { success && <small className="validation">Gracias {formData.fullName}, te contactaremos lo antes posible vía mail</small> }
      </div>
      <button type="submit" className="favButton">Enviar</button>
    </form>
  );
};

export default Form;