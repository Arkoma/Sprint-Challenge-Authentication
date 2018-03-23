<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
> * __Middleware:__ middleware is a function that does something in the middle, for example, between a request from a client and a response from a server. It generally as called to run before routes.
> * __Sessions:__ a way of tracking and managing a users experience during a particular window in time. Combined with authorization, a session can control what data or content on the server is available to the client.
> * __bcrypt:__ a library for hashing passwords. For mre see question 2 below.
> * __JWT:__ JSON Web Token
2.  What does bcrypt do in order to prevent attacks?
> bcrypt allows an interface to send it a plaintextpassword and it returns a hashed password. A hashed password is a password that has been passed into a hashing function. A hashing function is a one way function that turns a string into a much longer seemingly random string of characters. The hash function will return the same string given the same input.  Storing this hashed password and using bcrypt's compare method allows the client to run an input password through the hash and check if it matches the hashed password in the database for authentication purposes. Bcrypt also adds a salt, which is another string added to the input plain text password. So a hacker would have to successfully guess both the password and the salt to hack the account.
3.  What are the three parts of the JSON Web Token?
> * __Header:__ The header contains the type of token, usually 'JWT', and the algorithm used to encode it.
> * __Payload:__ The payload is the actual object of data sent or stored for reuse later.
> * __Signature:__ Contains a secret and the algorithm used in the header.