function showrecall(a) {
    $('#recall').fadeIn(150, function () {
        $('#recall_form').find('input, button').attr('disabled', null);
        $('#recall input[name=name]').first().focus();
    });
    if (a) $('html, body').animate({
        scrollTop: 0//$("#recall_form").offset().top
    }, 400);
}
function hiderecall() {
    $('#recall').fadeOut(150);
}
function gorecall(obj) {
    var form = $(obj);
    $.post('recall.php', form.serialize())
        .done(function (data) {
            var o = eval('('+data+')');
            form.find('input, button').attr('disabled', null);
            if (o.err) {
                yaCounter21866446.reachGoal('FORMERR');
                form.find('[name='+ o.f+']').focus();
                alert(o.err);
            } else {
                setTimeout(function () {
                    hiderecall();
                }, 2000);
                form.html('Ваш запрос принят, наш специалист свяжется с вами в ближайшее время.');
                yaCounter21866446.reachGoal('FORM');
            }
        })
        .fail(function (err) {
            form.find('input, button').attr('disabled', null);
            alert('Не удалось заказать звонок:( Попробуйте позвонить нам.');
        });
    form.find('input, button').attr('disabled', 'disabled');
    return false;
}
