document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('swap').addEventListener('click', function swapvals() {
    var fromVal = $("#fCurList option:selected").val();
    var fromText = $("#fCurList option:selected").text();
    var toVal = $("#tCurList option:selected").val();
    var toText = $("#tCurList option:selected").text();

    //Set the values
    $("#fCurList option:selected").val(toVal);
    $("#fCurList option:selected").text(toText);
    $("#tCurList option:selected").val(fromVal);
    $("#tCurList option:selected").text(fromText);
  });


});
