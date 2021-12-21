import React, { useState, useEffect } from 'react'
import styles from '../styles/countries.module.css'
import { List, Input, Avatar, Skeleton, } from 'antd'
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios';

const Countries = () => {
  const { Search } = Input;
  // const onSearch = value => console.log(value);
  // const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountry(response.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  // const loadMoreData = () => {
  //   if (loading) {
  //     return
  //   }
  //   setLoading(true)
  //   fetch(
  //     'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo'
  //   )
  //     .then((res) => res.json())
  //     .then((body) => {
  //       setData([...data, ...body.results])
  //       setLoading(false)
  //     })
  //     .catch(() => {
  //       setLoading(false)
  //     })
  // }

  // useEffect(() => {
  //   loadMoreData()
  // }, [])

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value)
  // }

  return (
    <div className={styles.container}>
      <div id="scrollableDiv" className={styles.scrollableDiv}>
        {/* <div>Top Countries</div> */}
        <InfiniteScroll
          dataLength={country.length}
          // next={fetchMoreData}
          hasMore={country.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          scrollableTarget="scrollableDiv"
        >
          <List
          header={
            <div>
               <Search prefix={<SearchOutlined />} placeholder="Country" enterButton="" onChange={(e) => setSearchFilter(e.target.value)} />
            </div>
          }
            dataSource={country}
            loadMore
            // renderItem={(item) => (
            //   <List.Item key={item.id}>
            //     <List.Item.Meta
            //       avatar={<Avatar src={item.picture.large} shape="square" size="large" />}
            //       title={<a href="/country">{item.name.last}</a>}
            //     />
            //   </List.Item>
            // )}
            renderItem={loading ? (<h4>Loading</h4>
              ) : (
                country
                .filter((value) => {
              if (searchFilter === '') {
                return value
                } else if (value.title.toLowerCase().includes(searchFilter.toLowerCase())
                ) {
                  return value
                }
              })
          .map((item) => {
            return (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.flags} shape="square" size="large" />}
                title={<a href="/country">{item.name.official}</a>}/>
            </List.Item>
            )
            
          })
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  )
}


export default Countries
