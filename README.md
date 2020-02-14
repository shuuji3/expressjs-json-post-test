# expressjs-json-post-test

Just POST JSON text to the server returning the same JSON.

## Example

### Server

```console
 > node server.js
 body { x: '1', y: '2' }
```

### Client

```
 > curl -H 'Content-Type: application/json' http://localhost:8000/ --data '{"x": "1", "y": "2"}'
 {"x":"1","y":"2"}
```
