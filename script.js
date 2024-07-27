console.log('connected');

function openRecipe (val) {
    console.log('open recipe ran')
    const targetDiv = document.getElementById(val);
    targetDiv.classList.remove('hidden');
  }

  function closeRecipe (val) {
    console.log(val);
    const targetDiv = document.getElementById(val);
    targetDiv.classList.add('hidden');
  }
