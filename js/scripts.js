$(document).foundation();

window.onload = function() {

		var $grid = $('.n-main__grid').isotope({
			itemSelector: '.cart-item',
			layoutMode: 'masonry',
			masonry: {
			    gutter: 30
			}
		});

		var filterFns = {
			numberGreaterThan50: function() {
				var number = $(this).find('.number').text();
				return parseInt( number, 10 ) > 50;
			},
			ium: function() {
				var name = $(this).find('.name').text();
				return name.match( /ium$/ );
			}
		};

		$('.filters-button-group').on( 'click', 'button', function() {
			var filterValue = $( this ).attr('data-filter');
			filterValue = filterFns[ filterValue ] || filterValue;
			$grid.isotope({ filter: filterValue });
		});

		$('.button-group').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
			});
		});

		$('.n-main__announcement__row__field__check').click(function(){
		   $(this).parent().parent().find('input').prop('checked',false);
		   $(this).find('input').prop('checked',true);
		});

		function placeholder() {

          $('input[type="text"],input[type="search"], textarea').focus(function(){
            if ($(this).prop('readonly')==false) {
               var plac = $(this).prop('placeholder');
               $(this).prop('placeholder',' ');

               $('input[type="text"],input[type="search"], textarea').blur(function(){
                   $(this).prop('placeholder',plac);
               });
            }
          });

        };

        placeholder();

        if ($('.page input').hasClass("phone-mask")) {
          $(".page .phone-mask").mask("+7 (999) 999-9999");
        };

        $('.n-main__n-home__select__wrap').selectmenu({
            appendTo: '.n-main__n-home__select',
        });

        $('.wrap2').selectmenu({
            appendTo: '.n-main__announcement__select',
        });

        $('.nano').nanoScroller({
            alwaysVisible: true
        });

        $('.popup-city__close').click(function(){
            $('.popup-city').hide('fast');
        })

        if ($('.popup__connect').length) {

            setTimeout(function(){
               $.magnificPopup.open({
                    items: {
                        src: '.popup__connect'
                    },
                    type: 'inline',

                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: true,
                    preloader: false,
                    closeMarkup: '',
                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-slide-bottom'
                });
            },500);
        }

        if ($('.popup-cards').length) {

            setTimeout(function(){
               $.magnificPopup.open({
                    items: {
                        src: '.popup-cards'
                    },
                    type: 'inline',

                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: true,
                    preloader: false,
                    closeMarkup: '',
                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-slide-bottom'
                });
            },500);
        }


        $(function () {
            $('').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'

            });
            $(document).on('click', '.popup__connect__header__close', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
            });
            $(document).on('click', '.popup-cards__close', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
            });
        });

//!check-field//

    $(function() {
     $('.rf').each(function(){
     // Объявляем переменные (форма и кнопка отправки)
      var form = $(this),
      btn = form.find('.disabled');

     // Добавляем каждому проверяемому полю, указание что поле пустое
      form.find('.rfield').addClass('empty_field');

     // Функция проверки полей формы
      function checkInput(){
         form.find('.rfield').each(function(){
             if($(this).val() != ''){
         // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
             } else {
         // Если поле пустое добавляем класс-указание
                $(this).addClass('empty_field');
             }
         });
       }

      // Функция подсветки незаполненных полей
      function lightEmpty(){
          var img = form.find('.empty_field').css('background-image');
        form.find('.empty_field').css({'border':'2px solid rgba(247,43,10,0.6)'});
        form.find('.empty_field').next().show();

      // Через полсекунды удаляем подсветку
        setTimeout(function(){
           form.find('.empty_field').removeAttr('style');
           $('.field-war').hide();
        },500);
       }

      // Проверка в режиме реального времени
        setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
           checkInput();
      // Считаем к-во незаполненных полей
           var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
           if(sizeEmpty > 0){
              if(btn.hasClass('disabled')){
                  return false
              } else {
                btn.addClass('disabled')
               }
            } else {
               btn.removeClass('disabled')
              }
         },500);

      // Событие клика по кнопке отправить
         btn.click(function(){
           if($(this).hasClass('disabled')){
      // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
              lightEmpty();
              return false
           } else {
     // Все хорошо, все заполнено, отправляем форму
              form.submit();
             }
         });
        });
      });

//!/check-field//

};