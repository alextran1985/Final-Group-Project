import { gql } from '@apollo/client';


export const QUERY_CURRENT_USER = gql`
    query getCurrent($email: String) {
        getCurrent(email: $email) {
            _id
            username
            email
            recipes {
                _id
                recipeName
                ingredients
                image
            }
        }
    }
`