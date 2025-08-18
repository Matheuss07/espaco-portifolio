import './Teste.css'

import img from '../logo.svg'

const Teste = () => {
    return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f8f8",
      textAlign: "center"
    }}>
      <h1 style={{ 
        fontSize: "4rem", 
        fontWeight: "bold", 
        color: "#d9534f" 
      }}>
        🚧 EM MANUTENÇÃO!!!!
      </h1>
    </div>
    );
};

export default Teste;

