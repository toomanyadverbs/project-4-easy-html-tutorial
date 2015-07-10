//Ace editor styles:

var editor = ace.edit("editor");
editor.setTheme("ace/theme/solarized_light");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setUseWrapMode(true);
var getCode = editor.getValue();
