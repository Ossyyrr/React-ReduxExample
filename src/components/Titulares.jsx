import React from 'react'
import { connect } from 'react-redux'

function Titulares({titulares}){
    return <section>
        <h2>Titulares</h2>
        <div>
        {titulares.map(j=>(    
            <article>
                <div>
                <img src={j.foto} alt={j.nombre}></img>
                <button>X</button>
                </div>
                <p>{j.nombre}</p>
            
            </article>))  }
        </div>
    </section>    
}


const mapStateToProps = state =>({
    titulares : state.titulares
    })
    
    const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)