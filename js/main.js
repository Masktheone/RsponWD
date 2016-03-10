/**
 * Created by Martin on 10-03-2016.
 */
$(function(){
    $('ul li a').on('click', function()
    {
        $(this).parent().addClass('current').siblings()
    }
}