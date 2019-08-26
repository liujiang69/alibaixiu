$('#logout').on('click', function() {
    var isComfirm = confirm('确定退出吗')

    if (isComfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
})