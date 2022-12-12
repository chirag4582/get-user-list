// create a function and following the progressions inside the function.
function PopulateData(){
  const GridElement = document.getElementById('message')
  axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
  console.log(res.data)
  const data = res.data

  data.forEach((contact)=>{
    const InnerMessage = document.createElement('div');
    InnerMessage.setAttribute('class','player');
    const PlayerName = document.createElement('div');
    PlayerName.innerText = contact.name;
    PlayerName.setAttribute('class','strength');
    InnerMessage.append(PlayerName);
    const PlayerEmail = document.createElement('div');
    PlayerEmail.innerText = contact.email;
    InnerMessage.append(PlayerEmail);
    const PlayerPhone = document.createElement('div');
    PlayerPhone.innerText = contact.phone;
    InnerMessage.append(PlayerPhone);
    const PlayerWebsite = document.createElement('div');
    PlayerWebsite.innerText = contact.website;
    InnerMessage.append(PlayerWebsite);
    const PlayerCompany = document.createElement('div');
    PlayerCompany.innerText = contact.company.name;
    InnerMessage.append(PlayerCompany);
    



    GridElement.append(InnerMessage)
  })
  }).catch((error)=>{
    console.log(error)
  })
}
// Progression 1: Create a promise call which fetches data
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
