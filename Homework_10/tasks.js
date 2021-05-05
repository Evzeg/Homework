

// ___________________________________________Task_1___________________________________________________________________

$('[href^="https"]').attr('target', '_blank');

// ___________________________________________Task_2___________________________________________________________________

let titleH2 = $('h2.head');

titleH2.css({
  'background-color': 'green'
});

titleH2.find('.inner').css({
  fontSize: '35px'
});

// ___________________________________________Task_3___________________________________________________________________

$('h3').first().before($('h3 ~ div'));

// ___________________________________________Task_4___________________________________________________________________

let input = $('input[type="checkbox"]');
let checkedCount = 0;

input.on('change', function() {
  checkedCount = +$('input[type="checkbox"]:checked').length;

  if (checkedCount >= 3) {
    input.attr('disabled', true);
  }
});



