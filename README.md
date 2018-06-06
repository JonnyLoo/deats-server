# server


curl -i -X POST -H 'Content-Type: application/json' -d '{"passwordHash": "password", "email": "deats@deats.com", "username": "deats", "accessLevel": "admin", "tokenSeed": "1"}' http://localhost:8000/api/signup
