$('.original').on('keyup', function() {
  let input = $(this).val();
  let emoji = $('#dropdown').val();
  console.log(emoji);
  let result = input.split(' ').join(emoji);
  $('.mirror').val(result);
});
