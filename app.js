<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

  <style>
    .form-label {
      font-size: 1.2rem;
    }

    #messageBox {
      display: none;
    }
  </style>
</head>

<body>

  <header>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">ICC Player Management</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="playersList.html">Players List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="addPlayers.html">Add Players</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </header>


  <main>

    <section class="pb-5">
      <div class="container py-4">
        <h1>Add PLayers</h1>

        <form id="addPlayersForm">

          <div class="mt-3">
            <label for="name" class="form-label">Player Full Name:</label>
            <input id="name" type="text" class="form-control" />
          </div>

          <div class="mt-3">
            <label for="dob" class="form-label">Date Of Birth:</label>
            <input id="dob" type="date" class="form-control" />
          </div>

          <div class="mt-3">
            <label for="nationality" class="form-label">Nationality:</label>
            <input id="nationality" type="text" class="form-control" />
          </div>

          <div class="mt-3">
            <label for="birthPlace" class="form-label">Place of Birth:</label>
            <input id="birthPlace" type="text" class="form-control" />
          </div>

          <div class="mt-3">
            <label for="contactAddress" class="form-label">Contact Address:</label>
            <textarea id="contactAddress" class="form-control" rows="5" cols="45"></textarea>
          </div>

          <div class="mt-3">
            <label for="phoneNumber" class="form-label">Phone Number:</label>
            <input id="phoneNumber" type="number" class="form-control" />
          </div>

          <div class="mt-3">
            <label for="email" class="form-label">Email Address:</label>
            <input id="email" type="email" class="form-control" />
          </div>

          <div class="mt-3">
            <label for="selectRole" class="form-label">Playing Role:</label>
            <select id="selectRole" class="form-select">
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-Rounder">All-Rounder</option>
            </select>
          </div>

          <div class="mt-3">
            <label for="battingHand" class="form-label">Batting Hand:</label>
            <select id="battingHand" class="form-select">
              <option value="Right-Handed">Right Handed</option>
              <option value="Left-Handed">Left Handed</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div class="mt-3">
            <label for="bowlingStyle" class="form-label">Bowling Style:</label>
            <select id="bowlingStyle" class="form-select">
              <option value="Right-Arm-Fast">Right-Arm Fast</option>
              <option value="Left-Arm-Fast">Left-Arm Fast</option>
              <option value="Right-Arm-Medium">Right-Arm Medium</option>
              <option value="left-Arm-Medium">left-Arm Medium</option>
              <option value="Right-Arm-Spin-(Off-Spin)">Right-Arm Spin (Off-Spin)</option>
              <option value="Left-Arm-Spin-(Off-Spin)">Left-Arm Spin (Off-Spin)</option>
            </select>
          </div>

          <button class="btn btn-primary mt-5">Add Player</button>

        </form>

        <div id="messageBox"> </div>

      </div>


    </section>


  </main>


  <script>

    const addPlayersForm = document.querySelector('#addPlayersForm')
    const name = document.querySelector('#name')
    const dob = document.querySelector('#dob')
    const nationality = document.querySelector('#nationality')
    const birthPlace = document.querySelector('#birthPlace')
    const contactAddress = document.querySelector('#contactAddress')
    const phoneNumber = document.querySelector('#phoneNumber')
    const email = document.querySelector('#email')
    const selectRole = document.querySelector('#selectRole')
    const battingHand = document.querySelector('#battingHand')
    const bowlingStyle = document.querySelector('#bowlingStyle')
    const messageBox = document.querySelector('#messageBox')
    const apiUrl = 'https://players-backend-student-neog-ca.replit.app/players'

    addPlayersForm.addEventListener('submit', function (event) {

      event.preventDefault();

      const newPlayer = {
        fullName: name.value,
        dateOfBirth: dob.value,
        nationality: nationality.value,
        placeOfBirth: birthPlace.value,
        phoneNumber: phoneNumber.value,
        emailAddress: email.value,
        playingRole: selectRole.value,
        battingHand: battingHand.value,
        bowlingStyle: bowlingStyle.value
      }

      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newPlayer),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          if (data) {
            messageBox.style.display = 'block'
            messageBox.className = "bg-info-subtle mt-3 p-3 rounded"
            messageBox.textContent = 'Saved Successfully.'
          }
        })



    })


  </script>

  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
