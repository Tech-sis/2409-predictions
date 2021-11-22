import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Club',
    dataIndex: 'club',
    time: 'time',
    key: 'i',
    width: 200,
    fixed: 'left',
  },
  {
    title: '1X2',
    children: [
      {
        title: '1',
        key: 'i',
        width: 100,
        dataIndex: 'tags',
      },
    {
        title: 'X',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Double Chance',
    children: [
      {
        title: '1X',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '12',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'X2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Over/Under',
    children: [
      {
        title: 'O',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'OG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'UG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Goal/No Goal',
    children: [
      {
        title: 'GG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'NG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Odd / Even',
    children: [
      {
        title: 'Odd',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'Even',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Correct Scores',
    children: [
      {
        title: '1',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'X',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Halftime/ Fulltime',
    children: [
      {
        title: '',
        dataIndex: 'fail',
        key: 'i',
        width: 200,
      },
    ],
  },
  {
    title: 'Handicap',
    children: [
      {
        title: '1',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'X',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Draw No Bet',
    children: [
      {
        title: '1',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Multi C.Score 1',
    children: [
      {
        title: '',
        dataIndex: 'fail',
        key: 'i',
        width: 200,
      },
    ],
  },
]

const data = []
for (let i = 0; i <= 10; i++) {
  data.push({
    key: i,
    club: 'Leicester city vs Chelsea',
    time: '16:00',
    date: '20 Nov',
    tags: ['90%', '100%'],
    fail: '1.3',
    pass: '1.7'
  })
}

const Fixtures = () => {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 500, y: 300 }}
        />
      </div>
    )
}

export default Fixtures
