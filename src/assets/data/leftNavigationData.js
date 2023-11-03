import * as BootstrapIcon from 'react-icons/bs';

const data = [
	{
		menu: 'main',
		items: [
			{
				item: 'dashboard',
        icon: BootstrapIcon.BsFillGridFill,
				itemList: [
					{ name: 'admin dashboard', link: '/admin' },
					{ name: 'teacher dashboard', link: '/teacher' },
					{ name: 'student dashboard', link: '/student' },
				],
			},
			{
				item: 'students',
				itemList: [
					{ name: 'student list', link: '/list' },
					{ name: 'student view', link: '/view' },
					{ name: 'student add', link: '/add' },
					{ name: 'student edit', link: '/edit' },
				],
			},
			{
				item: 'teachers',
				itemList: [
					{ name: 'teachers list', link: '/list' },
					{ name: 'teachers view', link: '/view' },
					{ name: 'teachers add', link: '/add' },
					{ name: 'teachers edit', link: '/edit' },
				],
			},
			{
				item: 'departments',
				itemList: [
					{ name: 'department list', link: '/list' },
					{ name: 'department add', link: '/add' },
					{ name: 'department edit', link: '/edit' },
				],
			},
			{
				item: 'subjects',
				itemList: [
					{ name: 'subject list', link: '/list' },
					{ name: 'subject add', link: '/add' },
					{ name: 'subject edit', link: '/edit' },
				],
			},
		],
	},
	{
		menu: 'management',
		items: [
			{
				item: 'accounts',
				itemList: [
					{ name: 'fees collection', link: '/fees-collection' },
					{ name: 'expenses', link: '/expenses' },
					{ name: 'salary', link: '/salary' },
					{ name: 'add fees', link: '/add-fees' },
					{ name: 'add expenses', link: '/add-expenses' },
					{ name: 'add salary', link: '/add-salary' },
				],
			},
			{
				item: 'holiday',
				itemList: [],
			},
			{
				item: 'exam list',
				itemList: [],
			},
			{
				item: 'events',
				itemList: [],
			},
			{
				item: 'time table',
				itemList: [],
			},
			{
				item: 'time table',
				itemList: [],
			},
			{
				item: 'library',
				itemList: [],
			},
			{
				item: 'blog',
				itemList: [
					{ name: 'view blog', link: '/view' },
					{ name: 'add blog', link: '/add' },
				],
			},
			{
				item: 'settings',
				itemList: [],
			},
		],
	},
	{
		menu: 'others',
		items: [
			{
				item: 'hostel',
				itemList: [],
			},
			{
				item: 'transport',
				itemList: [],
			},
			{
				item: 'logout',
				itemList: [],
			},
		],
	},
];

export default data;
