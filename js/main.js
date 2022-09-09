$("#genrate-btn").click(() => {
  let title = $("#title").val(),
    description = $("#description").val(),
    keywords = $("#Keywords").val(),
    index = $("#index").val(),
    follow = $("#follow").val(),
    sitetype = $("#sitetype").val(),
    language = $("#language").val(),
    author = $("#author").val();

  let value1 = '<meta name="title" content="' + title + '"/>\n',
    value2 = '<meta name="description" content="' + description + '"/>\n',
    value3 = '<meta name="keywords" content="' + keywords + '"/>\n',
    value4 = '<meta name="robots" content="' + index + ", " + follow + '"/>\n',
    value5 =
      '<meta http-equiv="Content-Type" content="text/html; charset=' +
      sitetype +
      '"/>\n',
    value6 = '<meta name="language" content="' + language + '"/>\n',
    value7 = '<meta name="author" content="' + author + '"/>';
  let value = "";
  if (title !== "") {
    value = value1;
  }
  if (description !== "") {
    value += value2;
  }
  if (keywords !== "") {
    value += value3;
  }
  value += value4;
  if (sitetype !== "") {
    value += value5;
  }
  if (language !== "") {
    value += value6;
  }
  if (author !== "") {
    value += value7;
  }
  if (value !== "") {
    $("#genrated-meta-tags").val(value);
  }
});

let btnCopy = document.querySelector(".btn-copy");
btnCopy.addEventListener("click", () => {
  let txt = document.querySelector("#genrated-meta-tags");
  txt.select();
  document.execCommand("Copy");
  alert("Code Copy Successfuly");
});
