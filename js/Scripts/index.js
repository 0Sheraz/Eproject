// feauters script not worked 
const continentSelect = document.getElementById('continent');
const activitySelect = document.getElementById('activity');
const submitButton = document.querySelector('.btn');

 
const options = {
  oceania: [ 'skiing'],
  asia: [  'Mountaineering'],
  'north-america': ['Rock-Climbing' ],
  europe: ['Ice-Climbing']
};

 
continentSelect.addEventListener('change', () => {
  const selectedContinent = continentSelect.value;
  const selectedOptions = options[selectedContinent];
  activitySelect.innerHTML = '';
  selectedOptions.forEach((option) => {
    const newOption = document.createElement('option');
    newOption.value = option;
    newOption.textContent = option;
    activitySelect.appendChild(newOption);
  });
});

 
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const selectedContinent = continentSelect.value;
  const selectedActivity = activitySelect.value;
  console.log(`Take me to ${selectedContinent} for ${selectedActivity}`);
});
// feauters script not worked 

// About us event listners and function 

// About us event lisyners and function 