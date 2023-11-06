import * as BootstrapIcon from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';
import { SiCoursera } from 'react-icons/si';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import {
	MdHolidayVillage,
	MdOutlineEmojiTransportation,
	MdLogout,
} from 'react-icons/md';
import { BiTable } from 'react-icons/bi';
import { IoLibrarySharp, IoSettings } from 'react-icons/io5';
import { FaBloggerB, FaHotel } from 'react-icons/fa';

const data = [
	{
		menu: 'main',
		items: [
			{
				item: 'dashboard',
				icon: <BootstrapIcon.BsFillGridFill />,
				itemList: [
					{ name: 'admin dashboard', link: 'admin' },
					{ name: 'teacher dashboard', link: 'teacher' },
					{ name: 'student dashboard', link: 'student' },
				],
			},
			{
				item: 'students',
				icon: <BootstrapIcon.BsMortarboardFill/>,
				itemList: [
					{ name: 'student list', link: 'list' },
					{ name: 'student view', link: 'view' },
					{ name: 'student add', link: 'add' },
					{ name: 'student edit', link: 'edit' },
				],
			},
			{
				item: 'teachers',
				icon: <GiTeacher/>,
				itemList: [
					{ name: 'teachers list', link: 'list' },
					{ name: 'teachers view', link: 'view' },
					{ name: 'teachers add', link: 'add' },
					{ name: 'teachers edit', link: 'edit' },
				],
			},
			{
				item: 'departments',
				icon: <BootstrapIcon.BsBuildingsFill />,
				itemList: [
					{ name: 'department list', link: 'list' },
					{ name: 'department add', link: 'add' },
					{ name: 'department edit', link: 'edit' },
				],
			},
			{
				item: 'specialties',
				icon: <BootstrapIcon.BsFillBuildingFill />,
				itemList: [
					{ name: 'specialty list', link: 'list' },
					{ name: 'specialty add', link: 'add' },
					{ name: 'specialty edit', link: 'edit' },
				],
			},
			{
				item: 'subjects',
				icon: <SiCoursera/>,
				itemList: [
					{ name: 'subject list', link: 'list' },
					{ name: 'subject add', link: 'add' },
					{ name: 'subject edit', link: 'edit' },
				],
			},
		],
	},
	{
		menu: 'management',
		items: [
			{
				item: 'accounts',
				icon: <RiMoneyDollarBoxFill />,
				itemList: [
					{ name: 'fees collection', link: 'fees-collection' },
					{ name: 'expenses', link: 'expenses' },
					{ name: 'salary', link: 'salary' },
					{ name: 'add fees', link: 'add-fees' },
					{ name: 'add expenses', link: 'add-expenses' },
					{ name: 'add salary', link: 'add-salary' },
				],
			},
			{
				item: 'holiday',
				icon: <MdHolidayVillage />,
				link: 'holiday',
				itemList: [],
			},
			{
				item: 'exam list',
				link: 'exam-list',
				icon: <BootstrapIcon.BsFileTextFill />,
				itemList: [],
			},
			{
				item: 'events',
				link: 'events',
				icon: <BootstrapIcon.BsCalendar2EventFill />,
				itemList: [],
			},
			{
				item: 'time table',
				link: 'ime-table',
				icon: <BiTable />,
				itemList: [],
			},
			{
				item: 'library',
				link: 'library',
				icon: <IoLibrarySharp />,
				itemList: [],
			},
			{
				item: 'blog',
				icon: <FaBloggerB />,
				itemList: [
					{ name: 'view blog', link: 'view' },
					{ name: 'add blog', link: 'add' },
				],
			},
			{
				item: 'settings',
				icon: <IoSettings/>,
				link: 'settings',
				itemList: [],
			},
		],
	},
	{
		menu: 'others',
		items: [
			{
				item: 'hostel',
				link: 'hostel',
				icon: <FaHotel/>,
				itemList: [],
			},
			{
				item: 'transport',
				link: 'transport',
				icon: <MdOutlineEmojiTransportation/>,
				itemList: [],
			},
			{
				item: 'logout',
				link: 'logout',
				icon: <MdLogout/>,
				itemList: [],
			},
		],
	},
];

export default data;
