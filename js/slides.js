$(function(){
	$('.mosaico .container .mosaico-wraper').slick({
		centerMode: false,
		slidesToShow:6,
		arrow:false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:3
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2
			}
		},
		{
			breakpoint:380,
			settings:
			{
				arrows:false,
				centerMode:true,
				slidesToShow:1
			}
		}


		]
	});


	$('.tratamentos .container').slick({
			centerMode:false,
			slidesToShow:3,
			arrows:false,
			infinite:false,
			responsive:[

				{
					breakpoint:768,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:2
					}
				},
				{
					breakpoint:480,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:1
					}
				}

			]
	});

	$('.depoimentos .container').slick({
			centerMode:false,
			slidesToShow:1,
			arrows:false,
			dots:true,
			infinite:false,
	});

	$('.mosaico-social').slick({
		centerMode: false,
		slidesToShow:9,
		arrow:false,
		responsive:[

		{
			breakpoint:1028,
			settings:{
				arrows:false,
				centerMode:false,
				infinite:false,
				slidesToShow:8
			}
		},

		{
			breakpoint:930,
			settings:{
				arrows:false,
				centerMode:false,
				infinite:false,
				slidesToShow:7
			}
		},

		{
			breakpoint:835,
			settings:{
				arrows:false,
				centerMode:false,
				infinite:false,
				slidesToShow:6
			}
		},

		{
			breakpoint:768,
			settings:{
				arrows:false,
				centerMode:false,
				infinite:false,
				slidesToShow:4
			}
		},

		{
			breakpoint:480,
			settings:{
				arrows:false,
				centerMode:false,
				infinite:false,
				slidesToShow:1
			}
		},


		]
	});
})