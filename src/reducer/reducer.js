import {createStore } from 'redux'
import {AddFeature} from '../actions/addFeature'
import {RemoveFeature} from '../actions/removeFeature'

const initial = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}
function reducer(state = initial,action){
    switch(action.type){
        case AddFeature:
            return {...state,
                car:{...state.car,
                    price:  state.car.price + action.payload.price,
                    features:[...state.car.features,action.payload]}};
        case RemoveFeature:
            console.log('hello 4')
            const newArray = state.car.features.filter(item =>{
                return item !== action.payload
               
            })
            return{...state,car:{...state.car,
                price:state.car.price - action.payload.price,
                features:newArray}}
            
        default:
            return state
            
      

    }

}
export const store = createStore(reducer)