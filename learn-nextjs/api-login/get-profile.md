Base url: https://js-post-api.herokuapp.com/api

Login API

```
{
    "username": "test",
    "password": "1234"
}
```

Profile API

GET /profile

HEADERS

Authorization: Bearer ACCESS_TOKEN

Response:

{
    "username": "test",
    "city": "Hanoi",
    ...
}

you have to login to accept profile

