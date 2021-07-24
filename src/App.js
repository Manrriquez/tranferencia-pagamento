 // import logo from './logo.svg';
import './App.css';
import img from './img/usuario1.jpg'
import img2 from './img/img2/usuario2.jpg'
import img3 from './img/img3/usuario3.jpg'
import img4 from './img/img4/usuario4.png'


function Usuarios() {
  return (
    <div className="Container">
      <div className="Perfil">
        <img className="img" src={img} /> 
      </div>
         <div className="Usuarios">
           <div className="dados">
              <p className="name">Nome de Usuario: Lucas Souza</p>
              <p className="id">ID: 1002</p>
              <p className="username">Username: @LucasSouza12</p>
              <div className="btn">
                <button type="button">Pagar</button>
              </div>
           </div> 
         </div>
    </div>
  )
}

export default Usuarios;
