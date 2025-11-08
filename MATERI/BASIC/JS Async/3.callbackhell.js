setTimeout(function(){
    document.body.style.backgroundColor = 'red';
    setTimeout(function(){
        document.body.style.backgroundColor = 'yello';
        setTimeout(function(){
            document.body.style.backgroundColor = 'green';
                setTimeout(function(){
                    document.body.style.backgroundColor = 'blue';
                }, 1000)
            }, 1000)
        }, 1000)
}, 1000)