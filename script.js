let box = document.getElementById("box");
let data = async () => (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
 data().then((res) =>{
   res.forEach((val) => {
       box.insertAdjacentHTML("beforeend",
       `<tr>
       <td>${val.userId}</td>
       <td>${val.id}</td>
       <td>${val.title}</td>
       <td>${val.body}</td>
      </tr> `);
   });

}).catch((err) => {
    console.log(err);

});