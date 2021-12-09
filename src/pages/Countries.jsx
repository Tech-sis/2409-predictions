import React, { useState, useEffect } from 'react'
import styles from '../styles/countries.module.css'
import { List, Input,  message, Avatar, Skeleton, Divider } from 'antd'
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroll-component'

const Countries = () => {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const loadMoreData = () => {
    if (loading) {
      return
    }
    setLoading(true)
    fetch(
      'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo'
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results])
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <div className={styles.container}>
      <div id="scrollableDiv" className={styles.scrollableDiv}>
        {/* <div>Top Countries</div> */}
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
          header={
            <div>
              <Search enterButton={true} placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    
            </div>
          }
            dataSource={data}
            loadMore
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  // description={item.email}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default Countries
