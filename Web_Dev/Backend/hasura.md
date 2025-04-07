## hasura 
* is a open source tool that makes easier to work with graphql and only postgresql database
* it can be installed with docker by just configuring docker-compose file(check the documentation)
* it just creats graphql api's for the data that we added to postgrs db manually in web console
* it has both query and mutation option where i can select it in bottom

## client side api handling for hasura
* we can use apollo client to send graphql api request to hasura 
* to install apollo client use `ng add apollo-angualar` and then add ur url to backend hasura in app.config.ts
* there are different methods to query and mutate using apollo client, first we need to store a gql query in varibale and then we can directly pass
  