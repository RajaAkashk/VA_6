<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>

  <header class="container py-4">
    <h1>Event Registration Form</h1>
  </header>

  <section>
    <div class="container">

      <form id="eventRegistrationForm">

        <label for="name">Name:</label>
        <input id="name" type="text" /> <br> <br>

        <label for="email">Email:</label>
        <input id="email" type="email" /> <br> <br>

        <label for="selectEvent">Select Event:</label>
        <select id="selectEvent">
          <option value="conference">conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Seminar">Seminar</option>
          <option value="NetworkingEvent">Networking Event</option>
          <option value="Webinar">Webinar</option>
        </select> <br> <br>

        <label for="number">Number of Attendees:</label>
        <input id="number" type="number" /> <br> <br>

        <label for="registrationType">Registration Type:</label>
        <input value="Individual" type="radio" name="registrationType" />Individual
        <input value="Group" type="radio" name="registrationType" />Group <br> <br>

        <label for="additionalInfo">Additional Information:</label><br>
        <textarea id="additionalInfo" rows="4" cols="35" /> </textarea> <br> <br>

        <button type="submit" class="btn btn-primary">Submit</button>

      </form>

      <div id="result" class="my-4">
      </div>

    </div>
  </section>


  <script>



    const eventRegistrationForm = document.querySelector('#eventRegistrationForm')


    eventRegistrationForm.addEventListener('submit', function (event) {
      event.preventDefault();


      const resultValue = document.querySelector('#result')
      const nameValue = document.querySelector('#name').value
      const emailValue = document.querySelector('#email').value
      const selectEventValue = document.querySelector('#selectEvent').value
      const numberValue = document.querySelector('#number').value
      const typeValue = document.querySelector('input[name="registrationType"]').value
      const additionalInfoValue = document.querySelector('#additionalInfo').value



      const col = document.createElement('div')
      col.className = "col-md-12"

      const card = document.createElement('div')
      card.className = "card p-3"

      const cardBody = document.createElement('div')
      cardBody.className = "card-body"

      const h2 = document.createElement('h2')
      h2.textContent = 'Registration Submitted:'

      const name = document.createElement('p')
      name.innerHTML = `<strong>Name: </strong>${nameValue}`

      const email = document.createElement('p')
      email.innerHTML = `<strong>Email: </strong>${emailValue}`

      const selectEvent = document.createElement('p')
      selectEvent.innerHTML = `<strong>Event:</strong>${selectEventValue}`

      const number = document.createElement('p')
      number.innerHTML = `<strong>Number of Attendees:</strong>${numberValue}`


      const type = document.createElement('p')
      type.innerHTML = `<strong>Registration Type:</strong>${typeValue}`


      const additionalInfo = document.createElement('p')
      additionalInfo.innerHTML = `<strong>Additional Information:</strong>${additionalInfoValue}`


      cardBody.appendChild(h2)
      cardBody.appendChild(name)
      cardBody.appendChild(email)
      cardBody.appendChild(selectEvent)
      cardBody.appendChild(number)
      cardBody.appendChild(type)
      cardBody.appendChild(additionalInfo)
      card.appendChild(cardBody)
      col.appendChild(card)
      result.appendChild(col)
    })


  </script>


  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
