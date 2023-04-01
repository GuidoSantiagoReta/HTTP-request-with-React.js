# ___HTTP request with React.js___ ![](/src/img/react.png)


## Requests with ajax (asynchronous)

- Getting all posts from jsonplaceholder.



#### Dependencies for working logic:
- npm install axios


## Requests with ajax (asynchronous)
#### ___Example using Axios (async):___

```
useEffect(() => {

   const getAllPosts = async (id) =>{

    try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(res)
    } catch(error) {
      console.log(error)

    }
   }

  getAllPosts(1)

}, []);

```

## Requests with fetch (synchronous)

#### ___Example using fetch (sync):___

```
useEffect(() => {
 
   const getAllPosts = () =>{
   
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json ())
     .then((data) => console.log(data))
   }

  getAllPosts()

}, []);
```
##### Resources:
- https://jsonplaceholder.typicode.com/posts