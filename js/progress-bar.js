$(document).ready(function() {
    $(window).on('load scroll resize', function() {
        let top = $(window).scrollTop();
        let height = $(document).height();
        let windowheight = $(window).height();
        let width = (top / (height - windowheight)) * 100;
        $('#progress-bar').css({
            'width': (width + '%'),
        });
    });
});