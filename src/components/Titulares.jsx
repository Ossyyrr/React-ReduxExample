import React from 'react'
import { connect } from 'react-redux'

function Titulares({titulares, quitarTitular}){
    return <section>
        <h2>Titulares</h2>
        <div>
        {titulares.map(j=>(    
            <article key={j.id}>
                <div>
                <img src={j.foto} alt={j.nombre}></img>
                <button onClick={()=> quitarTitular(j) }> X</button>
                </div>
                <p>{j.nombre}</p>
            
            </article>))  }
        </div>
    </section>    
}


const mapStateToProps = state =>({
    titulares : state.titulares
    })
    
    const mapDispatchToProps = dispatch => ({
        quitarTitular(jugador){
            dispatch({
                type: 'QUITAR_TITULAR',
                jugador
            });
        }
    })

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)