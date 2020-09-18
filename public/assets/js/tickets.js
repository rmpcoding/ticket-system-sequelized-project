// Form submit to POST
// ========================================================================================================
const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Creates new Form Data from submit event
    const formData = new FormData(event.target);

    // Reveals submit value while adding key/value pairs into object
    let object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });

    // Utilize fetch method to POST data from form to controller routes api
    fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object),
    })
        .then((res) => {
            return res;
        })
        .then((data) => {
            // quietly refreshes page to display POST data
            location.reload();
            return data;
        });
});

// Create global variable for unique id
let id;

// Event listener to UPDATE
// ========================================================================================================
const sendButton = document.querySelectorAll('.btn-send')

sendButton.forEach(button => {
    button.addEventListener('click', (event) => {
        const paragraph = document.querySelectorAll('.item-todo')
        let object = {}
        // Targets data attribute in HTML to obtain unique id, stores inside an object
        paragraph.forEach(keys => {
            id = keys.getAttribute('data-id')
            object.id = id;
            return object;
        })

        console.log(object)
        
        fetch(`/api/tickets/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object),
        })
            .then((res) => {
                return res;
            })
            .then((data) => {
                // quietly refreshes page to display data
                location.reload();
                return data;
            });
    })
})

const deleteButton = document.querySelectorAll('.btn-delete')

// Event listener to DELETE
// ========================================================================================================
deleteButton.forEach(button => {
    button.addEventListener('click', (event) => {
        const paragraph = document.querySelectorAll('.item')
        let object = {}
        
        // Targets data attribute in HTML to obtain unique id, stores inside an object
        paragraph.forEach(keys => {
            id = keys.getAttribute('data-id')
            object.id = id;
            return object;
        })

        fetch(`/api/tickets/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object),
        })
            .then((res) => {
                return res;
            })
            .then((data) => {
                // quietly refreshes page to display data
                location.reload();
                return data;
            });
    })
})