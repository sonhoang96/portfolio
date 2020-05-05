$(document).ready(function() {
	/*setup the display*/

	const introApp = () => {
		$('.intro-app').delay(7000).animate({opacity: 0}, 1000, function(){
			$('#app').css({display:'block'});

			$('.intro-app').css({display:'none'});

			const navBar = () => {
				let bar = document.getElementsByClassName('navbar');
				$(bar).animate({opacity:1,'margin-left':'15%'},1000);

				let moveToTag = () => {
					$('a.item').bind('click', function(event) {
						event.preventDefault();
						$('html').stop().animate({
							scrollTop: $($(this).attr('href')).offset().top + 1
						},1000);
					});
				}
				moveToTag();

				$(bar).find('button').bind('click',function(event){
					event.preventDefault();
					$(bar).toggleClass('navbar-open');
					$(bar).find('button i').toggleClass('open');
				})
			}

			const displayHome = () => {

				let bg1 = document.getElementsByClassName('bg-1');
				let bg2 = document.getElementsByClassName('bg-2');
				let bg3 = document.getElementsByClassName('bg-3');

				$(bg1).delay(3000).animate({top:'5px',opacity:1},2000);
				$(bg2).delay(3000).animate({left:'-10%',opacity:1},2000);
				$(bg3).delay(3000).animate({left:'45%',opacity:1},2000);

				let introTitle = document.getElementsByClassName('intro-title');
				let description = document.getElementsByClassName('intro-description');
				let downloadBtn = document.getElementsByClassName('download');

				$(description).delay(5000).animate({opacity:1},2000);
				$(downloadBtn).delay(5000).animate({opacity:1},2000);
				$(introTitle).delay(5000).animate({opacity:1},3000,function(){
						let changeTitle = () => {
							let listTitle = ['Steve','Programmer','Front End Developer','Designer'];
							let intro = document.getElementById('intro');

							$(intro).text(listTitle[0]).animate({opacity: 1}, 1000,function(){

								$(intro).delay(1000).animate({opacity:0},1000,function(){

									$(intro).text(listTitle[1]).animate({opacity: 1}, 1000,function(){

										$(intro).delay(1000).animate({opacity:0},1000,function(){

											$(intro).text(listTitle[2]).animate({opacity: 1}, 1000,function(){

												$(intro).delay(1000).animate({opacity:0},1000,function(){

													$(intro).text(listTitle[3]).animate({opacity: 1}, 1000, function(){

														$(intro).delay(1000).animate({opacity:0},1000,function(){

															changeTitle();
														});

													});

												});

											});

										});

									});

								});

							});
					}//end changeTitle
					changeTitle();
				});
			}
			const displayAbout = () => {
				let getIntro = $('#about .introduction .intro');
				let getHobbit = $('#about .hobbit');
				let getReason = $('#about .reason');

				$('#about .about-title').animate({opacity: 1}, 1000);
				$('#about .about-preamble').delay(1000).animate({opacity: 1}, 1000, function(){

					getIntro.children('p.about-description').animate({opacity:1},1000);

					getHobbit.children('.hobbit-1, .hobbit-2').delay(1000).animate({opacity:1}, 1000);
					getHobbit.children('.about-hobbit').children('h2.about-preamble').delay(1000).animate({opacity:1}, 1000);
					getHobbit.children('.hobbit-3, .hobbit-4, .hobbit-5').delay(1000).animate({opacity:1}, 1000);

					getReason.delay(2000).animate({opacity:1},1000);
				});
			}

			/* bind click to open and close div.seemore */
			const openSeeMore = () => {
				$('.reason h2.about-preamble').bind('click', function(event) {

					$('#app').animate({opacity: 0.2},1500,function(){

						$('.see-more').animate({top:'50%'},1000);

					}).css({'pointer-events': 'none','user-select': 'none'});
						// event.preventDefault();
					});
			}
			const closeSeeMore = () => {
				$('.sm-content i').bind('click', function(event) {
					$('.see-more').animate({top:'-100%'},1500,function(){
						$('#app').animate({opacity: 1},500).css({'pointer-events': 'all','user-select':'auto'});
					})
						// event.preventDefault();
					});
			}
			const displaySkill = () => {

				$('#skills .skill-title').animate({opacity: 1}, 1000);
				$('#skills .skill-preamble').delay(1000).animate({opacity: 1}, 1000, function(){

					$('.my-process').animate({opacity:1}, 1000,function(){
						$('.process-slide').css({'margin-left':'-100%',transition:'2s'});
					});

					$('.hard-skills').delay(1000).animate({opacity:1}, 500,function(){

						$('.hard-skills .skill-preamble').css({
							transform:'rotate3d(0,0,0,90deg)',
							transition: '2s'
						});

						$('.other-skills').animate({opacity:1}, 500,function(){

							$('.other-skills .skill-preamble').css({
								transform:'rotate3d(0,0,0,90deg)',
								transition: '2s'
							});

							/*setup other skill ratio*/
							let displayEnglish = () => {
								let display = '.other-skills-display:nth-child(1) .skill-ratio';
								let color = '#5c5d5c';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '64%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:67,
									speed:2000
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-33%'}, 3000).css({
									background: color
								});

								$(display +' .run-ball').animate({'left': '65%'}, 3000).css({
									background: color
								});;
							}
							let displayCommunication = () => {
								let display = '.other-skills-display:nth-child(2) .skill-ratio';
								let color = '#5c5d5c';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '72%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:75,
									speed:2000
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-25%'}, 3000).css({
									background: color
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display +' .run-ball').animate({'left': '73%'}, 3000).css({
									background: color
								});
							}
							let displayWorkIndie = () => {
								let display = '.other-skills-display:nth-child(3) .skill-ratio';
								let color = '#009688';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '79%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:82,
									speed:2000
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-18%'}, 3000).css({
									background: color
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display +' .run-ball').animate({'left': '80%'}, 3000).css({
									background: color
								});
							}
							let displayWorkGr = () => {
								let display = '.other-skills-display:nth-child(4) .skill-ratio';
								let color = '#009688';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '47%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:50,
									speed:2000
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-50%'}, 3000).css({
									background: color
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display +' .run-ball').animate({'left': '48%'}, 3000).css({
									background: color
								});
							}
							let displayHtml = () => {
								let display = '.other-skills-display:nth-child(5) .skill-ratio';
								let color = '#6a1b9a';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '56%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:57,
									speed:2000
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-43%'}, 3000).css({
									background: color
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display +' .run-ball').animate({'left': '56%'}, 3000).css({
									background: color
								});
							}
							let displayCss = () => {
								let display = '.other-skills-display:nth-child(6) .skill-ratio';
								let color = '#6a1b9a';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '58%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:61,
									speed:2000
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-39%'}, 3000).css({
									background: color
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display +' .run-ball').animate({'left': '59%'}, 3000).css({
									background: color
								});
							}
							let displayJs = () => {
								let display = '.other-skills-display:nth-child(7) .skill-ratio';
								let color = '#b71c1c';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '52%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:55,
									speed:2000
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-45%'}, 3000).css({
									background: color
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display +' .run-ball').animate({'left': '53%'}, 3000).css({
									background: color
								});
							}
							let displayBootstrap = () => {
								let display = '.other-skills-display:nth-child(8) .skill-ratio';
								let color = '#b71c1c';

								$(display).parent().children('h3').css({color:color});

								$(display + ' p').animate({'margin-left': '47%'}, 3000).css({
									color: color
								});

								$(display + ' p span').countTo({
									from: 0,
									to:50,
									speed:2000
								});

								$(display + ' .bar-ratio .run-bar').animate({'left': '-50%'}, 3000).css({
									background: color
								});

								$(display + ' .bar-ratio').css({
									border:'1px solid ' + color
								});

								$(display +' .run-ball').animate({'left': '48%'}, 3000).css({
									background: color
								});
							}
							displayEnglish();
							displayCommunication();
							displayWorkIndie();
							displayWorkGr();
							displayHtml();
							displayCss();
							displayJs();
							displayBootstrap();
							/*setup other skill ratio*/

						});

					});

						$('div.block-lang').hover(function() {
							$(this).children('img').css({
								transform: 'rotate3d(0,1,0,360deg) scale(0.5)',
								transition: '1s'
							});

							$(this).children('p').css({
								color: '#671b00',
								transition: '0.5s'
							});
						}, 
						function() {
							$(this).children('img').css({
								transform: 'rotate3d(0,0,0,360deg) scale(1)',
								transition:'1.5s'
							});

							$(this).children('p').css({
								color: '#5c5d5c',
							});
						}); //setup hover for div.block-lang

						/* setup slide */
						const rightClick = () => {
							$('i.c-right').bind('click', function(event) {
								$('.process-slide').stop().css({'margin-left':'-100%'});
							});
						}
						const leftClick = () => {
							$('i.c-left').bind('click', function(event) {
								$('.process-slide').stop().css({'margin-left':'0'});
							});
						}

						leftClick();
						rightClick();
						/* setup slide */
					});
			}
			const displayProject = () => {
				$('#projects .project-title').animate({opacity: 1}, 1000);

				$('#projects .project-preamble').delay(1000).animate({opacity: 1}, 1000, function(){

					$('h3.front-end, span.symbol:nth-child(1)').animate({opacity:1}, 500,function(){
						$('span.symbol:nth-child(1)').css({'margin-right':0, transition: '1s'});

						$('span.symbol:nth-child(2)').delay(1000).animate({'margin-left': 0, opacity: 1}, 500, function(){

							let myProject = $('.my-project-front-end');

							for(let i = 0; i <= myProject.length; i++){
								$(myProject[i]).delay(100 * i).animate({opacity: 1}, 300);

								if(i === myProject.length){
									$('.view-more').delay(100 * i).animate({opacity:1}, 300);
								}
							}
						});
					});

					$('.pj-title').animate({opacity:1});
				});

				$('.my-project a').bind('click', function(event) {
					var url = $(this).attr('href');
					var target = $(this).attr('target', '_blank');
					window.open(url,target);
									});// combine link and open new window

				$('#projects button').bind('click', function(event) {
					var target = $(this).attr('target', '_blank');
					var url = 'https://codepen.io/Sonsip';
					window.open(url,target);
									});// combine link and open new window
			}
			const displayContact = () => {

				$('#contact p.contact-title').animate({opacity: 1}, 1000);
				$('#contact h2.contact-preamble').delay(1000).animate({opacity: 1}, 1000, function(){

					$('h3.contact-title').animate({opacity:1,'margin': '1rem 0'},1000, function(){
						let socialMedia = $('.social-media');
						for(let i = 0; i <= socialMedia.length; i++){
							setTimeout(() =>{
								$(socialMedia[i]).css({transform:'scale(1)'})
							}, 200 * i);
						}
						socialMedia.hover(function() {

							$(this).css({
								'box-shadow': '0px 0px 5px #5c5d5c, 0px 0px 10px #5c5d5c',
								'border-color': '#218cbb'
							});

							$(this).children('a.social-media-link').css({
								color: '#218cbb'
							});

							$(this).children('i').css({
								transform:'scale(1.3)',
								color: '#218cbb'
							});

						}, function() {

							$(this).css({
								'box-shadow': '0px 0px 5px #5c5d5c',
								border:'2px solid #5c5d5c'
							});

							$(this).children('a.social-media-link').css({
								color: '#5c5d5c'
							});

							$(this).children('i').css({
								transform:'scale(0)'
							});

						});
					});

					$('span.animation1').animate({left:'-25%'},3000);
					$('span.animation2').animate({right:'-25%'},3000);

					$('.phone-and-mail, .form-input').delay(2000).animate({opacity: 1},1000,function(){
						$('.phone,.mail,.address').animate({margin: '4rem 1rem'},1000);
						$('.form-input').animate({'margin-right': '5px'}, 1000);
					});
				});

				$('a.social-media-link').bind('click', function(event){
					event.preventDefault();
				})
			}
			/* bind click to open and close div.seemore  */

			/* Window scroll */
			const activePosition = () => {
				let activeBar = document.getElementsByClassName('item');
				let activeNav = document.getElementsByClassName('nav-link');
				let inActiveBar = document.getElementsByClassName('active');
				let inActiveNav = document.getElementsByClassName('active-link');
				let runActive = (num) => {
					$(inActiveNav).removeClass('active-link');
					$(inActiveBar).removeClass('active');
					$(activeBar[num]).addClass('active');
					$(activeNav[num]).addClass('active-link');
				}

				let windowScroll = $(window).scrollTop();

				if(windowScroll >= $('#home').offset().top && windowScroll < $('#about').offset().top)
				{	
					runActive(0);
				}

				if(windowScroll >= $('#about').offset().top && windowScroll < $('#skills').offset().top)
				{
					runActive(1);
				}

				if(windowScroll >= $('#skills').offset().top && windowScroll < $('#projects').offset().top)
				{	
					runActive(2);
				}

				if(windowScroll >= $('#projects').offset().top && windowScroll < $('#contact').offset().top)
				{
					runActive(3);
				}

				if(windowScroll >= $('#contact').offset().top){
					runActive(4);
				}
			}

			$(window).scroll(function(){
				activePosition();
			});
			/* Window scroll */	

			navBar();
			displayHome();
			setTimeout(displayAbout,10000);
			setTimeout(displaySkill,15000);
			setTimeout(displayProject,20000);
			setTimeout(displayContact,25000);
			openSeeMore();
			closeSeeMore();
			activePosition();
			});
	}
	introApp();
/*setup the display*/
});