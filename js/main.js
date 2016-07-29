/**
 * Created by Sergey Terehov on 28.07.16.
 */


$(document).ready(function() {
    var $galleryWrap = $('.gallery-wrap');
    if ($galleryWrap.length > 0) {
        if ( $(window).width() > 767) {
            $('.accordion-gallery').each(function (i, item) {
                var $accGallery = $(item),
                    $accGalleryLi = $accGallery.find('li'),
                    quantity = $accGalleryLi.length;

                /* start set images to backgrounds */
                $accGalleryLi.each(function (i, item) {
                    var $li = $(item),
                        $img = $li.find('img'),
                        src = $img.attr('src');
                    $li.css('background-image', 'url('+src+ ')');
                });
                /* end set images to backgrounds */

                /* start find images width/height */
                var imageW = 0, imageH = 0;
                $accGalleryLi.find('img').each(function (i, item) {
                    var $item = $(item);
                    if ($item.width() > imageW) {
                        imageW = $item.width();
                    }
                    if ($item.height() > imageH) {
                        imageH = $item.height();
                    }
                });
                /* end find images width/height */
                var imagePercentageW = (imageW/$accGallery.width())*100,
                    otherPercentageWith = (100-imagePercentageW)/(quantity-1);
                var liWidth = 100/quantity;
                $accGalleryLi.css({width: liWidth + '%', height: imageH});
                $accGalleryLi.on('click', function () {
                    var $this = $(this);
                    $accGalleryLi.css('width', otherPercentageWith + '%').removeClass('active');
                    $this.css('width', imagePercentageW + '%').addClass('active');
                });
                $accGalleryLi.eq(0).click();
            });

            if ($galleryWrap.children('div').length > 1) {
                $galleryWrap.slick({
                    adaptiveHeight: true
                });
            }
        } else {
            $('.accordion-gallery').each(function (i, item) {
                var $item = $(item);
                var $li = $item.find('li').each(function (i, item) {
                    var $liItem = $(item),
                        liContent = $liItem.html();
                    $galleryWrap.append('<div>'+ liContent+ '</div>');
                });
                $item.parent('div').remove();
            });


            if ($galleryWrap.children('div').length > 1) {
                $galleryWrap.slick({
                    adaptiveHeight: true
                });
            }
            // $('.accordion-gallery').each(function (i, item) {
            //     var $accGallery = $(item),
            //         $accGalleryLi = $accGallery.find('li'),
            //         quantity = $accGalleryLi.length;
            //
            //     /* start set images to backgrounds */
            //     $accGalleryLi.each(function (i, item) {
            //         var $li = $(item),
            //             $img = $li.find('img'),
            //             src = $img.attr('src');
            //         $li.css('background-image', 'url('+src+ ')');
            //     });
            //     /* end set images to backgrounds */
            //
            //     /* start find images width/height */
            //     var imageW = 0, imageH = 0;
            //     $accGalleryLi.find('img').each(function (i, item) {
            //         var $item = $(item);
            //         if ($item.width() > imageW) {
            //             imageW = $item.width();
            //         }
            //         if ($item.height() > imageH) {
            //             imageH = $item.height();
            //         }
            //     });
            //     /* end find images width/height */
            //
            //     var defaultHeight = '60px';
            //
            //     $accGalleryLi.css({'height': defaultHeight});
            //
            //     $accGalleryLi.on('click', function () {
            //         var $this = $(this);
            //         $accGalleryLi.css({'height': defaultHeight}).removeClass('active');
            //         $this.css({'height': imageH}).addClass('active');
            //     });
            //     $accGalleryLi.eq(0).click();
            // });
        }


    }

});