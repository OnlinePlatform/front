function submitDemoForm() {
    var form = $("form[name=internship_form]");
    $.ajax({
        type: "POST",
        url: form.action ? form.action : document.URL,
        data: $(form).serialize(),
        dataType: "text",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Ajax-Request", "true");
        },
        success: function(response) {
            $("#search").html(response);
        }
    });
    return false;
}