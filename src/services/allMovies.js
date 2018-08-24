import axios from 'axios';
import getToken from '../resolvers/getToken';
import constante from '../const';

export default () => {

    return axios ({
        url: constante.url+'graphql/',
        method: 'post',
        data: {
            query:`
                query{
                    allMovies{
                        _id,
                        name,
                        image,
                        synopsis,
                        year,
                        rank,
                        duration,
                        rating{
                            name,
                            description
                        },
                        genre{
                            name,
                            description
                        },
                        language,
                        premium,
                        url
                    }
                }
                `
        }, headers: {'Authorization':'JWT '+getToken()}
    })
}