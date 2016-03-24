var url = '/index.php';
var data = {
	Name: "a name"
	email: "an email address"
	more: "message typed from a text area input"
};
var callback = function (response) {
	//do something with the data
}
$.get(url, data, callback);
// same as jQuery.get(url, data, callback);