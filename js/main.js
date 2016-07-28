/**
 * Created by Sergey Terehov on 28.07.16.
 */


$(document).ready(function() {
    $('.accordion-gallery').each(function (i, item) {
        var $accGallery = $(item),
            $accGalleryLi = $accGallery.find('li'),
            quantity = $accGalleryLi.length;
        
        $accGalleryLi.each(function (i, item) {
            var $li = $(item),
                $img = $li.find('img'),
                src = $img.attr('src');
            $li.css('background-image', 'url('+src+ ')');
        });


        var imageW = $accGalleryLi.find('img').width(),
            imageH = $accGalleryLi.find('img').height(),
            imagePercentageW = (imageW/$accGallery.width())*100,
            otherPercentageWith = (100-imagePercentageW)/(quantity-1);

        console.log($accGallery.width());
        console.log(imageW, imagePercentageW, otherPercentageWith);


        var liWidth = 100/quantity;
        $accGalleryLi.css({width: liWidth + '%', height: imageH});

        $accGalleryLi.on('click', function () {
            var $this = $(this);
            $accGalleryLi.css('width', otherPercentageWith + '%');
            $this.css('width', imagePercentageW + '%');
        });

        $accGalleryLi.eq(0).click();
    })
});