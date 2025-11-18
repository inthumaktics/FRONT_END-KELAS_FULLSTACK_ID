requestPromise('movie.com')
    .then((result) => {
        console.log('page 1');
        console.log(result);
        return requestPromise('movie.com');
    })
    .then(() => {
        console.log('page 2');
        return requestAnimationFrame('movie.com');
    })
    .then(() => {
        console.log('page 3');
        return requestPromise('movie.com')
    })
    .catch((err) => {
        console.log(err);
    });

//CARA MEMBUAT PROMISE
