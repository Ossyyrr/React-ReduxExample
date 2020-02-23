import {createStore} from 'redux'


const initialState = {
    jugadores: [{
        id:1,
        nombre: 'Patri',
        foto: 'https://avatars2.githubusercontent.com/u/52755910?s=400&v=4'
    }, {
        id:2,
        nombre: 'Adri',
        foto: 'https://scontent.fmad7-1.fna.fbcdn.net/v/t1.0-1/c127.37.466.466a/s160x160/1010953_606795922672622_1406182586_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=1TRx_pgZn-EAX_pEWoH&_nc_ht=scontent.fmad7-1.fna&oh=c2692021c2db2261b955766cf0897f0c&oe=5EFCE9A3'
    },{
        id:3,
        nombre: 'Gato loco',
        foto: 'https://www.purina.es/gato/purina-one/sites/g/files/mcldtz1856/files/2018-06/Mi_gato_no_come%20%282%29.jpg'
    }
],
    titulares: [],
    suplentes: []
}


const reducerEnternador = (state = initialState, action) => {
    return state
}

export default createStore(reducerEnternador)