$(() => {
    $('ul > div').on('click', function () {
        $('body > footer > div:nth-child(3) > ul > li:nth-child(5), body > footer > div:nth-child(3) > ul > li:nth-child(6)').css('display', 'block');
        $(this).detach();
    })
});