$.getJSON('https://official-joke-api.appspot.com/random_joke', data => {
  console.log(data)
  $('.setup').html(data.setup)
  $('.punchline .joke').html(data.punchline)
  $('.setup').click( function (e) {
    $('.punchline').slideDown('slow')
  })

  $('.refresh').click(function (e){
    $.getJSON('https://official-joke-api.appspot.com/random_joke', data => {
      $('.punchline').hide()
      $('.setup').html(data.setup)
      $('.punchline .joke').html(data.punchline)
    }) 
  })
})
