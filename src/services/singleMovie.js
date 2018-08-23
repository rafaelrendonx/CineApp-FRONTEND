import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';

export default (id) => {

    return axios ({
        url: constantes.url+'grpahql',
        method: 'post',
        data:{
            query:`
            query{
                singleMovies(id:"${id}"){
                    _id,
                    name,
                    synopsis,
                    director,
                    language,
                    genre{
                        name
                    },
                    rating(name),
                    year,
                    url
                }
            }`
        }, headers: {'Authorization' : 'JWT ' + getToken()}
    })
}