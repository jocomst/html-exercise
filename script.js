fetch(`http://www.numbeo.com:8008/api/cities`)
    .then(res => res.json())
    .then(data => console.log(data))