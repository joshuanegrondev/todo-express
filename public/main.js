//House Gardner worked on this as a group.

const taskItem = document.querySelectorAll(".list")
document.getElementById('clearAll').onclick = clearAll;
document.getElementById('clearCompleted').onclick = clearCompleted;

Array.from(taskItem).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log("update click")
    const taskCompleted = this.childNodes[1].innerText
    console.log(taskCompleted)
    fetch('/update', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},

      body: JSON.stringify({
        'task': taskCompleted
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      window.location.reload(true)
    })

  })
})

function clearCompleted(){

    fetch('/clearCompleted', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'completed': "#5118cc"
      })
    }).then(function (response) {
      console.log(response)
      window.location.reload()
    })
  };

function clearAll(){

  fetch('/clearAll', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },

  }).then(function (response) {
    console.log(response)
    window.location.reload()
  })
};
