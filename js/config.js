var site = {
	// Site Title goes here
	title : 'Lorem Ipsum Site',
	// Site name goes here
	name  : 'Lorem Ipsum Site',
	// Specify site domain here
	domain: '',
	// Default page url goes here
	home_page : 'index.html',
	// Specify site meta data here
	meta  : {
		title    	: 'Thi',
		description : '',
		keywords 	: ''
	},
	// Developer information goes here
	developed_by : {
		name : 'Company.com',
		url  : 'company.com'
	},
	// Primary navigation goes here
	primary_navingation : [
		{ title : 'Home', link : 'index.html', css_class : 'home' },
		{ title : 'About Us', link : 'page?page=about', css_class : 'about' },
		{ title : 'Projects', link : 'page?page=projects', css_class : 'course' },
		{ title : 'Contact Us', link : 'page?page=contact', css_class : 'contact'}
	],
	// Secondary navigation goes here
	secondary_navingation : [
		{ title : 'View Our Portfolio', link : 'page?page=portfolio', img : 'li-2.png', css_class : '' },
		{ title : 'Services/Consultancy', link : 'page?page=consultancy', img : 'li-4.png', css_class : 'top_border_none' },
		{ title : 'On Going Projects', link : 'page?page=on-going-project', img : 'li-1.png', css_class : 'top_border_none' },
		{ title : 'Up Coming Projects', link : 'page?page=up-coming-project', img : 'li-1.png', css_class : 'top_border_none' },
		{ title : 'Sold Out Projects', link : 'page?page=sold-project', img : 'li-1.png', css_class : 'top_border_none' }
	],
	// Pages Dispatcher
	pages : {
		// page url
		'projects' : {
			// Content url
			'url' : 'content/projects.html',
			// Page title
			'title' : 'Projects',
			// Page height - required to hide iframe behaviours
			'height' : 350
		},
		'portfolio' : {
			'url' : 'content/projects.html',
			'title' : 'Our Portfolio',
			'height' : 350
		},
		'consultancy' : {
			'url' : 'content/projects.html',
			'title' : 'Our Services',
			'height' : 350
		},
		'on-going-project' : {
			'url' : 'content/on-going-project.html',
			'title' : 'Our On Going Projects',
			'height' : 350
		},
		'up-coming-project' : {
			'url' : 'content/projects.html',
			'title' : 'Our Up Coming Projects',
			'height' : 350
		},
		'sold-project' : {
			'url' : 'content/projects.html',
			'title' : 'Our Sold Projects',
			'height' : 350
		},
		'contact' : {
			'url' : 'content/projects.html',
			'title' : 'Contact Us',
			'height' : 350
		},
		'about' : {
			'url' : 'content/projects.html',
			'title' : 'About Us',
			'height' : 350
		}		
	}
};