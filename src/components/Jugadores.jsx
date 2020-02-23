import React from 'react'
import { connect } from 'react-redux'

function Jugadores({jugadores}){
    return <section>
        <h2>Jugadores</h2>
        <div className="Jugadores__container">
        {jugadores.map(j=>(    
            <article>
                <img src={j.foto} alt={j.nombre}></img>
                <h3>{j.nombre}</h3>
                <div>
                    <button>Titular</button>
                    <button>Suplente</button>
                </div>
            </article>))  }
        </div>
    </section>
}

const mapStateToProps = state =>({
jugadores : state.jugadores
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)