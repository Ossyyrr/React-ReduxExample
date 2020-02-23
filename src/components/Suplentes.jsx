import React from 'react'
import { connect } from 'react-redux'

function Suplentes({suplentes}){
    return <section>
        <h2>Suplentes</h2>
        <div>
        {suplentes.map(j=>(    
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
    suplentes : state.suplentes
    })
    
    const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)