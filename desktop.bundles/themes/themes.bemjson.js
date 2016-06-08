({
	block: 'page',
	title: 'Themes',
	favicon: '/favicon.ico',
	head: [
	{elem: 'meta', attrs: {name: 'description', content: ''}},
	{elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
	{elem: 'meta', attrs: {property: 'og:image', content: 'path/to/image.jpg'}},
	{elem: 'css', url: '../../libs/font-awesome/css/font-awesome.css'},
	{elem: 'css', url: 'themes.min.css'},
	{elem: 'link', attrs: {rel: 'apple-touch-icon', href: 'img/favicon/apple-touch-icon.png'}},
	{elem: 'link', attrs: {rel: 'apple-touch-icon',size: '72x72' , href: 'img/favicon/apple-touch-icon-72x72.png'}},
	{elem: 'link', attrs: {rel: 'apple-touch-icon',size: '114x114' , href: 'img/favicon/apple-touch-icon-114x114.png'}}
	],
	scripts: [{elem: 'js', url: 'themes.min.js'}],
	content: [
/*
 █████╗  ██████╗ ██████╗  ██████╗       ██╗    ██╗██╗  ██╗███████╗███████╗██╗     
██╔══██╗██╔════╝ ██╔══██╗██╔═══██╗      ██║    ██║██║  ██║██╔════╝██╔════╝██║     
███████║██║  ███╗██████╔╝██║   ██║█████╗██║ █╗ ██║███████║█████╗  █████╗  ██║     
██╔══██║██║   ██║██╔══██╗██║   ██║╚════╝██║███╗██║██╔══██║██╔══╝  ██╔══╝  ██║     
██║  ██║╚██████╔╝██║  ██║╚██████╔╝      ╚███╔███╔╝██║  ██║███████╗███████╗███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝        ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
*/
{
	block: 'agro-wheel',
	content: [
	{
		block: 'top-bar',
		content: [
		{

			block: 'top-line',
			mods: {theme: 'agro-wheel'},
			content: [
			{
				elem: 'status',
				content: 'Колеса от производителя',
			},
			{
				elem: 'mnu',
				tag: 'ul',
				content: [
				{
					elem: 'li',
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'tel:+79102200224',
						content : '8 910 220 02 24'
					}
					]
				},
				{
					elem: 'li',
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'mailto:info@landing2top.ru',
						content : 'info@landing2top.ru'
					}
					]
				},
				{
					elem: 'li',
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : '#',
						content : 'Моё сообщество'
					}
					]
				}
				]
			}
			]
		},
		{
			block: 'header',
			mods: {theme: 'agro-wheel'},
			content: [
			{
				block : 'logo',
				tag: 'a',
				attrs: {href: '#'},
				content: [
				{
					block: 'image',
					mix: {block: 'logo', elem: 'image'},
					alt: 'alt',
					url: '../../img/agro-wheel__logo.svg',
				},
				{
					elem: 'texts',
					mix: {block: 'logo', elem: 'texts'},
					content: [
					{
						elem: 'text',
						mix: {block: 'logo', elem: 'text'},
						elemMods: {theme: 'agro-wheel'},
						content: [
						'АгроКолеса Белогорья'
						]
					},
					{
						elem: 'desc',
						elemMods: {theme: 'agro-wheel'},
						content: [
						'Производство колес для сельхоз. техники в России'
						]
					}
					]
				}
				]
			},
			{
				block: 'phone',
				mix: {block: 'phone', elem: 'align-center'},
				content: [
				{
					elem : 'number',
					tag: 'a',
					attrs: {href: 'tel:88002343244'},
					elemMods: {theme: 'agro-wheel'},
					content : '8 800 234 324 4'
				},

				{
					elem: 'desc',
					elemMods: {theme: 'agro-wheel'},
					content: ['звонок по России бесплатный']
				}
				]
			},
			{
				block: 'mnu',
				tag: 'ul',
				content: [
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'agro-wheel'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Главная']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'agro-wheel'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Колеса']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'agro-wheel'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Шины']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'agro-wheel'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Компания']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'agro-wheel'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Контакты']
					}
					]
				}
				]
			}
			]

		}
		]
	},
	// ##########################################################
	{
		block: 'first-screen',
		content: [
		{
			block: 'pjax-container',
			content: [
			{
				block : 'row',
				content : [
				{
					elem : 'col',
					elemMods : { mw : 6 },
					content: [
					{
						elem: 'p',
						tag: 'p',
						content: [
						'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Мир свой журчит всеми приставка свой но которое свою домах рукопись. Снова строчка дал грустный одна журчит коварных повстречался продолжил.'
						]
					}
					]
				},
				{
					elem : 'col',
					elemMods : { mw : 6 },
					content : [
					{
						block: 'form',
						mods: {theme: 'agro-wheel'},
						tag: 'form',
						content: [
						{
							block : 'input',
							mods: {theme: 'agro-wheel'},
							placeholder : 'Введите имя'
						},
						{
							block : 'button',
							id: 'js-ripple-btn',
							mods : { theme : 'agro-wheel', type : 'link' },
							icon: {
								block: 'fa fa-paper-plane-o',
								mix: {block: 'button', elem: 'fa'},
								tag: 'i'
							},
							url : '#',
							text : 'Отправить'
						}
						]
					}
					]
				}
				]
			}
			]
		}
		]
	},
	]
},


/*
████████╗██╗  ██╗███████╗    ███████╗██╗    ██╗███████╗███████╗████████╗
╚══██╔══╝██║  ██║██╔════╝    ██╔════╝██║    ██║██╔════╝██╔════╝╚══██╔══╝
	 ██║   ███████║█████╗█████╗███████╗██║ █╗ ██║█████╗  █████╗     ██║   
	 ██║   ██╔══██║██╔══╝╚════╝╚════██║██║███╗██║██╔══╝  ██╔══╝     ██║   
	 ██║   ██║  ██║███████╗    ███████║╚███╔███╔╝███████╗███████╗   ██║   
	 ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚══════╝ ╚══╝╚══╝ ╚══════╝╚══════╝   ╚═╝   
	 */
	 {
	 	block: 'the-sweet',
	 	content: [
	 	{
	 		block: 'top-bar',
	 		content: [
	 		{

	 			block: 'top-line',
	 			mods: {theme: 'the-sweet'},
	 			content: [
	 			{
	 				elem: 'status',
	 				content: 'Торта много не бывает...',
	 			},
	 			{
	 				elem: 'mnu',
	 				tag: 'ul',
	 				content: [
	 				{
	 					elem: 'li',
	 					content: [
	 					{
	 						block : 'link',
	 						mix: {block: 'top-line', elem: 'a'},
	 						url : 'tel:+79102200224',
	 						content : '8 910 220 02 24'
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					content: [
	 					{
	 						block : 'link',
	 						mix: {block: 'top-line', elem: 'a'},
	 						url : 'mailto:info@landing2top.ru',
	 						content : 'info@landing2top.ru'
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					content: [
	 					{
	 						block : 'link',
	 						mix: {block: 'top-line', elem: 'a'},
	 						url : '#',
	 						content : 'Моё сообщество'
	 					}
	 					]
	 				}
	 				]
	 			}
	 			]
	 		},
	 		{
	 			block: 'header',
	 			mods: {theme: 'the-sweet'},
	 			content: [
	 			{
	 				block : 'logo',
	 				tag: 'a',
	 				attrs: {href: '#'},
	 				content: [
	 				{
	 					block: 'image',
	 					mix: {block: 'logo', elem: 'image'},
	 					alt: 'alt',
	 					url: '../../img/the-sweet__logo.svg',
	 				},
	 				{
	 					elem: 'texts',
	 					mix: {block: 'logo', elem: 'texts'},
	 					content: [
	 					{
	 						elem: 'text',
	 						mix: {block: 'logo', elem: 'text'},
	 						content: [
	 						'Сладкие идеи'
	 						]
	 					},
	 					{
	 						elem: 'desc',
	 						mix: {block: 'logo', elem: 'desc'},
	 						content: [
	 						'Торты на заказ'
	 						]
	 					}
	 					]
	 				}
	 				]
	 			},
	 			{
	 				block: 'phone',
	 				content: [
	 				{
	 					elem : 'number',
	 					tag: 'a',
	 					attrs: {href: 'tel:+79803218466'},
	 					content : '8 980 321 84 66'
	 				},

	 				{
	 					elem: 'desc',
	 					content: ['пн-пт 10:00-18:00']
	 				}
	 				]
	 			},
	 			{
	 				block: 'mnu',
	 				mods: {theme: 'the-sweet'},
	 				tag: 'ul',
	 				content: [
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'the-sweet', bacground: 'green'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Торты']
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'the-sweet', bacground: 'purple'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Начинки']
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'the-sweet', bacground: 'blue'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Отзывы']
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'the-sweet', bacground: 'dark-blue'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Контакты']
	 					}
	 					]
	 				}
	 				]
	 			}
	 			]

	 		}
	 		]
	 	},
	// ##########################################################
	{
		block: 'first-screen',
		content: [
		{
			block: 'pjax-container',
			content: [
			{
				block: 'row',
				content: [
				{
					elem: 'col',
					elemMods: {mw: 6},
					content: [

					{
						block : 'button',
						mods : { theme : 'the-sweet', type : 'link', bacground: 'green' },
						url : '#',
						text : 'Отправить'
					},
					{
						block : 'button',
						mods : { theme : 'the-sweet', type : 'link', bacground: 'purple' },
						url : '#',
						text : 'Отправить'
					},
					{
						block : 'button',
						mods : { theme : 'the-sweet', type : 'link', bacground: 'blue' },
						url : '#',
						text : 'Отправить'
					},
					{
						block : 'button',
						mods : { theme : 'the-sweet', type : 'link', bacground: 'dark-blue' },
						url : '#',
						text : 'Отправить'
					}

					]
				},
				{elem: 'col',
				content: [
				{
					block: 'form',
					tag: 'form',
					content: [
					'Form'
					]
				}
				]
			}
			]
		}
		]
	}
	]
}

]
},

/*
██╗      █████╗ ███╗   ██╗██████╗ ██╗███╗   ██╗ ██████╗ ██████╗ ████████╗ ██████╗ ██████╗ 
██║     ██╔══██╗████╗  ██║██╔══██╗██║████╗  ██║██╔════╝ ╚════██╗╚══██╔══╝██╔═══██╗██╔══██╗
██║     ███████║██╔██╗ ██║██║  ██║██║██╔██╗ ██║██║  ███╗ █████╔╝   ██║   ██║   ██║██████╔╝
██║     ██╔══██║██║╚██╗██║██║  ██║██║██║╚██╗██║██║   ██║██╔═══╝    ██║   ██║   ██║██╔═══╝ 
███████╗██║  ██║██║ ╚████║██████╔╝██║██║ ╚████║╚██████╔╝███████╗   ██║   ╚██████╔╝██║     
╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     
*/

{
	block: 'landing2top',
	content: [
	{
		block: 'top-bar',
		content: [
		{

			block: 'top-line',
			mods: {theme: 'landing2top'},
			content: [
			{
				elem: 'status',
				elemMods: {theme: 'landing2top'},
				content: 'Город засыпает, просыпаются сеошники...',
			},
			{
				elem: 'mnu',
				tag: 'ul',
				content: [
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'tel:+79102200224',
						content : '8 910 220 02 24'
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'mailto:info@landing2top.ru',
						content : 'info@landing2top.ru'
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : '#',
						content : 'Моё сообщество'
					}
					]
				}
				]
			}
			]
		},
		{
			block: 'header',
			mods: {theme: 'landing2top'},
			content: [
			{
				block : 'logo',
				tag: 'a',
				attrs: {href: '#'},
				content: [
				{
					block: 'image',
					mix: {block: 'logo', elem: 'image'},
					alt: 'alt',
					url: '../../img/landing2top__logo.svg',
				},
				{
					elem: 'texts',
					mix: {block: 'logo', elem: 'texts'},
					content: [
					{
						elem: 'text',
						elemMods: {theme: 'landing2top'},
						content: 'Landing2Top'
					},
					]
				}
				]
			},
			{
				block: 'phone',
				mix: {block: 'phone', elem: 'align-center'},
				content: [
				{
					elem : 'number',
					tag: 'a',
					elemMods: {theme: 'landing2top'},
					attrs: {href: 'tel:+79102200224'},
					content : '8 910 220 02 24'
				},

				{
					elem: 'desc',
					content: ['пн-пт 12:00-19:00']
				}
				]
			},
			{
				block: 'mnu',
				tag: 'ul',
				content: [
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Главная']
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Колеса']
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Шины']
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Компания']
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'landing2top'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Контакты']
					}
					]
				}
				]
			}
			]

		}
		]
	},
	// ##########################################################
	{
		block: 'first-screen',
		content: [
		{
			block: 'pjax-container',
			content: [
			{
				block: 'row',
				content: [
				{
					elem: 'col',
					elemMods: {mw: 6},
					content: [
					{
						block : 'button',
						mods : { theme : 'landing2top', type : 'link'},
						url : '#',
						text : 'Отправить'
					}
					]
				},
				{
					elem: 'col',
					elemMods: {mw: 6},
					content: [
					'this'
					]
				}
				]
			}
			]
		}
		]
	}
	]
},




/*
████████╗██████╗  ██████╗ ███████╗███████╗██╗   ██╗
╚══██╔══╝██╔══██╗██╔═══██╗██╔════╝██╔════╝╚██╗ ██╔╝
	 ██║   ██████╔╝██║   ██║█████╗  █████╗   ╚████╔╝ 
	 ██║   ██╔══██╗██║   ██║██╔══╝  ██╔══╝    ╚██╔╝  
	 ██║   ██║  ██║╚██████╔╝██║     ███████╗   ██║   
	 ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝   ╚═╝   
	 */
	 {
	 	block: 'trofey',
	 	content: [
	 	{
	 		block: 'top-bar',
	 		content: [
	 		{

	 			block: 'top-line',
	 			mods: {theme: 'trofey'},
	 			content: [
	 			{
	 				elem: 'status',
	 				elemMods: {theme: 'trofey'},
	 				content: 'Город засыпает, просыпаются сеошники...',
	 			},
	 			{
	 				elem: 'mnu',
	 				tag: 'ul',
	 				content: [
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					content: [
	 					{
	 						block : 'link',
	 						mix: {block: 'top-line', elem: 'a'},
	 						url : 'tel:+79102200224',
	 						content : '8 910 220 02 24'
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					content: [
	 					{
	 						block : 'link',
	 						mix: {block: 'top-line', elem: 'a'},
	 						url : 'mailto:info@trofey.ru',
	 						content : 'info@trofey.ru'
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					content: [
	 					{
	 						block : 'link',
	 						mix: {block: 'top-line', elem: 'a'},
	 						url : '#',
	 						content : 'Моё сообщество'
	 					}
	 					]
	 				}
	 				]
	 			}
	 			]
	 		},
	 		{
	 			block: 'header',
	 			mods: {theme: 'trofey'},
	 			content: [
	 			{
	 				block : 'logo',
	 				tag: 'a',
	 				attrs: {href: '#'},
	 				content: [
	 				{
	 					block: 'image',
	 					mix: {block: 'logo', elem: 'image'},
	 					alt: 'alt',
	 					url: '../../img/trofey__logo.svg',
	 				},
	 				{
	 					elem: 'texts',
	 					elemMods: {theme: 'trofey'},
	 					content: [
	 					{
	 						elem: 'text',
	 						elemMods: {theme: 'trofey'},
	 						content: 'Трофей'
	 					},
	 					{
	 						block : 'image',
	 						url : '../../img/trofey__line.svg',
	 						mix: {block: 'logo', elem: 'trofey-line'},
	 						alt : 'line'
	 					},
	 					{
	 						elem: 'desc',
	 						mix: {block: 'logo', elem: 'desc'},
	 						elemMods: {theme: 'trofey'},
	 						content: [
	 						'ресторан и пиццерия'
	 						]
	 					}
	 					]
	 				}
	 				]
	 			},
	 			{
	 				block: 'phone',
	 				content: [
	 				{
	 					elem : 'number',
	 					tag: 'a',
	 					elemMods: {theme: 'trofey'},
	 					attrs: {href: 'tel:+79102200224'},
	 					content : '8 910 220 02 24'
	 				},

	 				{
	 					elem: 'desc',
	 					content: ['пн-вс 12:00-00:00']
	 				}
	 				]
	 			},
	 			{
	 				block: 'mnu',
	 				tag: 'ul',
	 				content: [
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Главная']
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Колеса']
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Шины']
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Компания']
	 					}
	 					]
	 				},
	 				{
	 					elem: 'li',
	 					elemMods: {theme: 'trofey'},
	 					tag: 'li',
	 					content: [
	 					{
	 						elem : 'a',
	 						tag: 'a',
	 						attrs: {href: '#'},
	 						content : ['Контакты']
	 					}
	 					]
	 				}
	 				]
	 			}
	 			]

	 		}
	 		]
	 	},
// ##########################################################
{
	block: 'first-screen',
	content: [
	{
		block: 'pjax-container',
		content: [
		{
			block: 'row',
			content: [
			{
				elem: 'col',
				elemMods: {mw: 6},
				content: [
				{
					block : 'button',
					mods : { theme : 'trofey', type : 'link' },
					url : '#',
					text : 'Отправить'
				}
				]
			},
			{
				elem: 'col',
				elemMods: {mw: 6},
				content: []
			}
			]
		}
		]
	}
	]
},
]
},





/*
 █████╗ ██╗   ██╗████████╗ ██████╗ ███╗   ███╗ █████╗  ██████╗  █████╗ ███████╗██╗███╗   ██╗███████╗███████╗███████╗
██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗████╗ ████║██╔══██╗██╔════╝ ██╔══██╗╚══███╔╝██║████╗  ██║╚════██║╚════██║╚════██║
███████║██║   ██║   ██║   ██║   ██║██╔████╔██║███████║██║  ███╗███████║  ███╔╝ ██║██╔██╗ ██║    ██╔╝    ██╔╝    ██╔╝
██╔══██║██║   ██║   ██║   ██║   ██║██║╚██╔╝██║██╔══██║██║   ██║██╔══██║ ███╔╝  ██║██║╚██╗██║   ██╔╝    ██╔╝    ██╔╝ 
██║  ██║╚██████╔╝   ██║   ╚██████╔╝██║ ╚═╝ ██║██║  ██║╚██████╔╝██║  ██║███████╗██║██║ ╚████║   ██║     ██║     ██║  
╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝   ╚═╝     ╚═╝     ╚═╝  
*/
{
	block: 'automagazin777',
	content: [
	{
		block: 'top-bar',
		content: [
		{

			block: 'top-line',
			mods: {theme: 'automagazin777'},
			content: [
			{
				elem: 'status',
				elemMods: {theme: 'automagazin777'},
				content: 'Город засыпает, просыпаются сеошники...',
			},
			{
				elem: 'mnu',
				tag: 'ul',
				content: [
				{
					elem: 'li',
					elemMods: {theme: 'automagazin777'},
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'tel:+74722577777',
						content : '8 4722 577 777'
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'automagazin777'},
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'mailto:info@automagazin777.ru',
						content : 'info@automagazin777.ru'
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'automagazin777'},
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : '#',
						content : 'Моё сообщество'
					}
					]
				}
				]
			}
			]
		},
		{
			block: 'header',
			mods: {theme: 'automagazin777'},
			content: [
			{
				block : 'logo',
				tag: 'a',
				attrs: {href: '#'},
				content: [
				{
					block: 'image',
					mix: {block: 'logo', elem: 'image'},
					alt: 'alt',
					url: 'https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S',
				},
				{
					elem: 'texts',
					mix: {block: 'logo', elem: 'texts'},
					elemMods: {theme: 'automagazin777'},
					content: [
					{
						elem: 'text',
						elemMods: {theme: 'automagazin777'},
						content: 'Автомагазин 777'
					}
					]
				}
				]
			},
			{
				block: 'mnu',
				mods: {theme: 'automagazin777'},
				tag: 'ul',
				content: [
				{
					elem: 'li',
					elemMods: {theme: 'automagazin777'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['АвтоМагазин']
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'automagazin777'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['АвтоМойка']
					}
					]
				},
				{
					elem: 'li',
					elemMods: {theme: 'automagazin777'},
					tag: 'li',
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['АвтоСервис']
					}
					]
				}
				]
			}
			]

		}
		]
	},
	// ##########################################################
	{
		block: 'first-screen',
		content: [
		{
			block: 'pjax-container',
			content: [
			{
				block: 'row',
				content: [
				{
					elem: 'col',
					elemMods: {mw: 6},
					content: [
					{
						block: 'h1',
						content: [
							'Узнать наличие запчасти'
						]
					},
					{
						block: 'desc',
						content: [
							'сэкономите своё время. Менеджер перезвонит с уже готовым решением'
						]
					},
					{
						block: 'form',
						content: [
							'form'
						]
					}
				]
			},
			{
				elem: 'col',
				elemMods: {mw: 6},
				content: [
				{
					block: 'phone',
					content: [
					{
						elem : 'number',
						tag: 'a',
						elemMods: {theme: 'automagazin777'},
						attrs: {href: 'tel:+74722577777'},
						content : '8 4722 577 777'
					}
					]
				},
				{
					block: 'address',
					content: [
					'ул. Губкина, 52'
					]
				},
				{
					block: 'mode',
					content: [
					'с 10:00 до 18:00'
					]
				},
				{
					block: 'link',
					url: '#',
					content: [
					{
						block: 'image',
						url: 'https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S',
						alt: 'alt'
					}
					]
				},
				{
					block: 'desc',
					content: [
					'Рядом с остановкой «Спортивная»'
					]
				}
				]
			}
			]
		}
		]
	}
	]
},
]
},



/*
███████╗██╗     ███████╗███╗   ██╗ █████╗       ██████╗  ██████╗ ██████╗  ██████╗██╗  ██╗███████╗███╗   ██╗██╗  ██╗ ██████╗ 
██╔════╝██║     ██╔════╝████╗  ██║██╔══██╗      ██╔══██╗██╔═══██╗██╔══██╗██╔════╝██║  ██║██╔════╝████╗  ██║██║ ██╔╝██╔═══██╗
█████╗  ██║     █████╗  ██╔██╗ ██║███████║█████╗██████╔╝██║   ██║██████╔╝██║     ███████║█████╗  ██╔██╗ ██║█████╔╝ ██║   ██║
██╔══╝  ██║     ██╔══╝  ██║╚██╗██║██╔══██║╚════╝██╔══██╗██║   ██║██╔══██╗██║     ██╔══██║██╔══╝  ██║╚██╗██║██╔═██╗ ██║   ██║
███████╗███████╗███████╗██║ ╚████║██║  ██║      ██████╔╝╚██████╔╝██║  ██║╚██████╗██║  ██║███████╗██║ ╚████║██║  ██╗╚██████╔╝
╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ 
*/
{
	block: 'elena-borchenko',
	content: [
	{
		block: 'top-bar',
		content: [
		{

			block: 'top-line',
			mods: {theme: 'elena-borchenko'},
			content: [
			{
				elem: 'status',
				elemMods: {theme: 'elena-borchenko'},
				content: 'Прическа влияет на то, как складывается день, а в итоге и жизнь',
			},
			{
				elem: 'mnu',
				tag: 'ul',
				content: [
				{
					elem: 'li',
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'tel:+79205719888',
						content : '8 920 571 98 88'
					}
					]
				},
				{
					elem: 'li',
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : 'mailto:info@elenaborchenko.ru',
						content : 'info@elenaborchenko.ru'
					}
					]
				},
				{
					elem: 'li',
					content: [
					{
						block : 'link',
						mix: {block: 'top-line', elem: 'a'},
						url : '#',
						content : 'Моё сообщество'
					}
					]
				}
				]
			}
			]
		},
		{
			block: 'header',
			mods: {theme: 'elena-borchenko'},
			content: [
			{
				block : 'logo',
				tag: 'a',
				attrs: {href: '#'},
				content: [
				{
					block: 'image',
					mix: {block: 'logo', elem: 'image'},
					alt: 'alt',
					url: '../../img/elena-borchenko__logo.svg',
				},
				{
					elem: 'texts',
					content: [
					{
						elem: 'text',
						elemMods: {theme: 'elena-borchenko'},
						content: [
						'Елена Борченко'
						]
					},
					{
						elem: 'desc',
						elemMods: {theme: 'elena-borchenko'},
						content: [
						'Стилист'
						]
					}
					]
				}
				]
			},
			{
				block: 'phone',
				mix: {block: 'phone', elem: 'align-center'},
				content: [
				{
					elem : 'number',
					tag: 'a',
					attrs: {href: 'tel:79205719888'},
					elemMods: {theme: 'elena-borchenko'},
					content : '8 920 571 98 88'
				},
				/*{
					elem: 'desc',
					elemMods: {theme: 'elena-borchenko'},
					content: ['звонок по России бесплатный']
				}*/
				]
			},
			{
				block: 'mnu',
				tag: 'ul',
				content: [
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'elena-borchenko'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Главная']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'elena-borchenko'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Колеса']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'elena-borchenko'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Шины']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'elena-borchenko'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Компания']
					}
					]
				},
				{
					elem: 'li',
					tag: 'li',
					elemMods: {theme: 'elena-borchenko'},
					content: [
					{
						elem : 'a',
						tag: 'a',
						attrs: {href: '#'},
						content : ['Контакты']
					}
					]
				}
				]
			}
			]

		}
		]
	},
	// ##########################################################
	{
		block: 'first-screen',
		content: [
		{
			block: 'pjax-container',
			content: [
			{
				block : 'row',
				content : [
				{
					elem : 'col',
					elemMods : { mw : 6 },
					content: [
					{
						elem: 'p',
						tag: 'p',
						content: [
						'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Мир свой журчит всеми приставка свой но которое свою домах рукопись. Снова строчка дал грустный одна журчит коварных повстречался продолжил.'
						]
					}
					]
				},
				{
					elem : 'col',
					elemMods : { mw : 6 },
					content : [
					{
						block: 'form',
						mods: {theme: 'elena-borchenko'},
						tag: 'form',
						content: [
						{
							block : 'input',
							mods: {theme: 'elena-borchenko'},
							placeholder : 'Введите имя'
						},
						{
							block : 'button',
							mods : { theme : 'elena-borchenko', type : 'link' },
							icon: {
								block: 'fa fa-paper-plane-o',
								mix: {block: 'button', elem: 'fa'},
								tag: 'i'
							},
							url : '#',
							text : 'Отправить'
						}
						]
					}
					]
				}
				]
			}
			]
		}
		]
	},
	]
},


/*
████████╗██╗  ██╗███████╗    ███████╗███╗   ██╗██████╗ 
╚══██╔══╝██║  ██║██╔════╝    ██╔════╝████╗  ██║██╔══██╗
	 ██║   ███████║█████╗      █████╗  ██╔██╗ ██║██║  ██║
	 ██║   ██╔══██║██╔══╝      ██╔══╝  ██║╚██╗██║██║  ██║
	 ██║   ██║  ██║███████╗    ███████╗██║ ╚████║██████╔╝
	 ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═══╝╚═════╝ 
	 */
	 ]
	})