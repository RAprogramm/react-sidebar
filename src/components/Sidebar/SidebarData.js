import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    dropdownMenu: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    dropdownMenu: [
      {
        title: 'Report_1',
        path: '/reports/report_1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Report_2',
        path: '/reports/report_2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Report_3',
        path: '/reports/report_3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    dropdownMenu: [
      {
        title: 'Message_1',
        path: '/messages/message_1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Message_2',
        path: '/messages/message_2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: 'Registration',
    path: '/signup',
    icon: <IoIcons.IoMdHelpCircle />,
  },
]
