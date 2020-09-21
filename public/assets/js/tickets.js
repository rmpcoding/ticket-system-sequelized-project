// Form submit to POST
// ===============================================================================================
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

    // Creating fetch request object with submit values
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object),
    };

    // Returning object to frontend while quietly reloading page
    fetch('/api/tickets', request)
        .then((res) => {
            return res;
        })
        .then(() => {
            location.reload();
        });
});

// Targeting items to set completed to true
// ===============================================================================================
const sendButton = document.querySelectorAll('.btn-send')

sendButton.forEach(button => {
    button.addEventListener('click', (event) => {
        const paragraph = document.querySelectorAll('.item-todo')
        let object = {}

        // Targets data attribute to obtain unique button/paragraph id, stores inside request object
        paragraph.forEach(keys => {
            if (keys.getAttribute('data-id') === button.getAttribute('data-id') ) {
                id = keys.getAttribute('data-id')
                object.id = id;
                return object;
            }
        })

        // Creating fetch request object with submit values
        const request = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object),
        }
        
        // Returning object to frontend while quietly reloading page
        fetch(`/api/update`, request)
            .then((res) => {
                return res;
            })
            .then(() => {
                location.reload();
            });
    })
})

// Event listener to DELETE
// ========================================================================================================
const deleteButton = document.querySelectorAll('.btn-delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => {
        const paragraph = document.querySelectorAll('.item')
        let object = {}
        
        // Targets data attribute in HTML to obtain unique id, stores inside an object
        paragraph.forEach(keys => {
            if (keys.getAttribute('data-id') === button.getAttribute('data-id') ) {
                id = keys.getAttribute('data-id')
                object.id = id;
                return object;
            }
        })
        
        // Creating fetch request object with submit values
        const request = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object),
        }

        // Returning object to frontend while quietly reloading page
        fetch(`/api/delete/${id}`, request)
            .then((res) => {
                return res;
            })
            .then(() => {
                location.reload();
            });
    })
})