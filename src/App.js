 // import logo from './logo.svg';
import './App.css';
import img from './img/usuario1.jpg'
import img2 from './img/img2/usuario2.jpg'
import img3 from './img/img3/usuario3.jpg'
import img4 from './img/img4/usuario4.png'
import { useState } from 'react';
import Modal from './Components/modal'


function Usuarios() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
   <>
     <div className="Container">
        <div className="Perfil">
          <img className="img" src={img} /> 
        </div>
        <div className="Usuarios">
          <div className="dados">
            <p className="name">Nome de Usuario: Lucas Souza</p>
            <p className="id">ID: 1000</p>
            <p className="username">Username: @LucasSouza12</p>
            <div className="btn">
              <button type="button" onClick={() => setIsModalVisible(true)}>Pagar</button>
              {isModalVisible ? <Modal /> : null}
            </div>
          </div> 
        </div>
     </div>
      <div className="Container">
        <div className="Perfil">
          <img className="img" src={img2} />
        </div>
        <div className="Usuarios">
            <div className="dados">
              <p className="name">Nome de Usuario: Roberta Oliveira</p>
              <p className="id">ID: 1001</p>
              <p className="username">Username: @RobertaOliveira</p>
              <div className="btn">
                <button className="button" type="button">Pagar</button>
              </div>
            </div>
        </div>
      </div>
      <div className="Container">
        <div className="Perfil">
          <img className="img" src={img3} />
        </div>
        <div className="Usuarios">
            <div className="dados">
              <p className="name">Nome de Usuario: Paula Mesquita</p>
              <p className="id">ID: 1002</p>
              <p className="username">Username: @MesquitaPaula</p>
              <div className="btn">
                <button className="button" type="button">Pagar</button>
              </div>
            </div>
        </div>
      </div>
      <div className="Container">
        <div className="Perfil">
          <img className="img" src={img4} />
        </div>
        <div className="Usuarios">
            <div className="dados">
              <p className="name">Nome de Usuario: João Gustavo</p>
              <p className="id">ID: 1003</p>
              <p className="username">Username: @JoaoGustavo</p>
              <div className="btn">
                <button className="button" type="button">Pagar</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Usuarios;
