import React from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  Layout,
  Menu,
  Card,
  Image,
  Typography,
  Select,
  Table,
  Button,
} from 'antd'
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'
import styles from '../styles/countries.module.css'
import stadium from '../assets/stadium.svg'
import PL from '../assets/Premier_League-Logo 1.svg'
import DL from '../assets/developm league.svg'
import EFLC from '../assets/EFL CUP.svg'
import EFL from '../assets/EFL_League_Two_Logo 1.svg'
import english from '../assets/english-football-league-logo-768x768 1.svg'
import fa from '../assets/fa cup.svg'
import fawomen from '../assets/fawomen.svg'
import leagueone from '../assets/League_one.svg'
import vanarama from '../assets/pic_Vanarama-National-League-North-logo-300x85 1.svg'
import SBC from '../assets/PngItem_4901942 1.svg'
import south from '../assets/south 1.svg'
import U18 from '../assets/U18PremierLeague.svg'
import master from '../assets/MasterCard_Logo.svg'
import verve from '../assets/Verve.svg'
import visa from '../assets/visa.svg'

const { Title } = Typography
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
const { Option } = Select

const gridStyle = {
  width: '80px',
  textAlign: 'center',
  margin: '10px 12px',
  height: '130px',
  padding: '10px',
  backgroundColor: '#fff',
  border: '1px solid #A2BFF8',
  borderRadius: '10px',
}

const columns = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    width: 100,
    fixed: 'left',
    render: (text, record) => (
      <span>
        {record.time}
        {/* <Link to={'./fixture'} style={{ padding: '10px' }}>
          {text}
        </Link> */}
      </span>
    ),
  },
  {
    title: () => (
      <div>
        <img src={PL} alt="stadium" style={{ width: '30px', height: '30px' }} />
        <span style={{ paddingLeft: '10px' }}>Premier League</span>
      </div>
    ),
    dataIndex: '1',
    key: '1',
  },
]

const data = []
for (let i = 0; i <= 2; i++) {
  data.push({
    key: '1',
    1: 'Everton vs Arsenal',
    time: '16:00',
  })
}

const MajorCountry = () => {
  return (
    <Layout className={styles.layout}>
      <Header className="header">
        {/* <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>
      <Content style={{ padding: '0 50px', margin: '40px' }}>
        <Layout className={styles.sitelayoutbackground}>
          <Sider className={styles.sitelayoutbackground} width={250}>
            <p className={styles.siderP}>Sports</p>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                fontSize: '19px',
                fontFamily: 'Merriweather',
                borderTop: '5px solid #EB5126',
              }}
              className={styles.siderHead}
            >
              <SubMenu key="sub1" title="Football">
                <img src={PL} alt="stadium" style={{ width: '30px' }} />
                <Menu.Item key="1">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>England</div>
                    <div>+139</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="2">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>France</div>
                    <div>+112</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="3">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Italy</div>
                    <div>+45</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="4">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Spain</div>
                    <div>+45</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="5">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Portugal</div>
                    <div>+45</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="6">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Netherlands</div>
                    <div>+45</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="7">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Belgium</div>
                    <div>+45</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="8">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Scotland</div>
                    <div>+45</div>
                  </div>
                </Menu.Item>
                <Menu.Item key="9">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Turkey</div>
                    <div>+45</div>
                  </div>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Basketball"></SubMenu>
              <SubMenu key="sub3" title="American Football">
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title="Baseball">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" title="Tennis">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub6" title="Boxing">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub7" title="Casino">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub8" title="Cricket">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub9" title="Cycling">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub10" title="Darts">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: '0 21px 0 0',
              minHeight: 280,
              maxWidth: '760px',
              backgroundColor: 'white',
            }}
          >
            <div className={styles.contentContainer}>
              <img src={stadium} alt="flag" className={styles.flag} />
              <div className={styles.contentCrumb}>
                <Breadcrumb
                  style={{
                    backgroundColor: '#061B65',
                    color: 'white',
                    height: '48px',
                    padding: '10px 20px',
                    fontSize: '20px',
                    width: '718px',
                    borderTop: '5px solid #EB5126',
                  }}
                  separator=">"
                >
                  <Breadcrumb.Item>Football</Breadcrumb.Item>
                  <Breadcrumb.Item>England</Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="/" className={styles.breadlink}>
                      Leagues
                    </a>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <div className={styles.topLeagueContainer}>
              <button className={styles.topleague}>Top Leagues</button>
              <div>
                <Card className={styles.carddiv}>
                  <Card.Grid style={gridStyle}>
                    <Image src={PL} />
                    <p>Premier League</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={english} />
                    <p>English Football League</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={SBC} />
                    <p>EFL Championship</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={fa} />
                    <p>FA Cup</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={EFLC} />
                    <p>EFL Cup</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={leagueone} />
                    <p>EFL League One</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={EFL} />
                    <p>EFL League Two</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={fawomen} />
                    <p>FA Women's Super League</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={vanarama} />
                    <p style={{ marginTop: '25px' }}>National League North</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={south} />
                    <p style={{ marginTop: '25px' }}>National League South</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={DL} />
                    <p>Professional Development League</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={U18} />
                    <p>U-18 Premier League</p>
                  </Card.Grid>
                  <div style={{ float: 'right', marginRight: '15px' }}>
                    <Select
                      defaultValue="All"
                      dropdownStyle={{ color: 'white' }}
                    >
                      <Option value="all">All</Option>
                    </Select>
                  </div>
                </Card>
              </div>
              <div>
                <div style={{ margin: '20px 0' }}>
                  <Select
                    defaultValue="Upcoming Events"
                    dropdownStyle={{ color: 'white' }}
                  >
                    <Option value="all">All</Option>
                  </Select>
                </div>
                <div className={styles.eventsContainer}>
                  <Select
                    defaultValue="Tue 7 Dec"
                    dropdownStyle={{ color: 'white' }}
                  >
                    <Option value="all">All</Option>
                  </Select>
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 500 }}
                    bordered
                    size="small"
                    pagination={false}
                  />
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 500 }}
                    bordered
                    size="small"
                    pagination={false}
                  />
                  <Select
                    defaultValue="Fri 17 Dec"
                    dropdownStyle={{ color: 'white' }}
                    style={{ marginTop: '20px' }}
                  >
                    <Option value="all">All</Option>
                  </Select>
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 500 }}
                    bordered
                    size="small"
                    pagination={false}
                  />
                  <Select
                    defaultValue="Tue 7 Dec"
                    dropdownStyle={{ color: 'white' }}
                    style={{ marginTop: '20px' }}
                  >
                    <Option value="all">All</Option>
                  </Select>
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 500 }}
                    bordered
                    size="small"
                    pagination={false}
                  />
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 500 }}
                    bordered
                    size="small"
                    pagination={false}
                  />
                  <Select
                    defaultValue="Tue 7 Dec"
                    dropdownStyle={{ color: 'white' }}
                    style={{ marginTop: '20px' }}
                  >
                    <Option value="all">All</Option>
                  </Select>
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 500 }}
                    bordered
                    size="small"
                    pagination={false}
                  />
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 500 }}
                    bordered
                    size="small"
                    pagination={false}
                  />
                  <Button className={styles.eventsMore}>Show more</Button>
                </div>
              </div>
            </div>
          </Content>
          <Sider width={250}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              title="Major Countries"
            >
              {/* Sports */}
              {/* <div>Sports</div> */}
              {/* <Menu.Item>Sports</Menu.Item> */}
              <SubMenu key="sub1" title="Football"></SubMenu>
            </Menu>
          </Sider>
        </Layout>
      </Content>
      <Footer>
        <div className={styles.footerContainer}>
          <div className={styles.info}>
            <h6 className={styles.brandname}> ORAQL</h6>
            <p>
              Diam dolores sit invidunt gubergren et consetetur est. Sed erat at
              diam nonumy sed kasd, sea elitr est sit rebum. Diam dolores sit
              invidunt gubergren et consetetur est. Sed erat at diam nonumy sed
              kasd, sea elitr est sit rebum.
            </p>
            <TwitterOutlined
              style={{ marginRight: '20px', fontSize: '20px' }}
            />
            <InstagramOutlined
              style={{ marginRight: '20px', fontSize: '20px' }}
            />
            <YoutubeOutlined
              style={{ marginRight: '20px', fontSize: '20px' }}
            />
          </div>
          <div className={styles.contact}>
            <h6 className={styles.contactInfo}>Contact</h6>
            <div style={{ display: 'flex' }}>
              <EnvironmentOutlined />
              <p style={{ marginLeft: '10px' }}>
                13, Gregory Avenue, Frrankfrut Germany
              </p>
            </div>
            <div style={{ display: 'flex' }}>
              <PhoneOutlined />
              <p style={{ marginLeft: '10px' }}>+49 144 59 783</p>
            </div>
            <div style={{ display: 'flex' }}>
              <MailOutlined />
              <p style={{ marginLeft: '10px' }}>oraqlprtdz@gmail.com</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>PAYMENT METHODS WE ACCEPTS</p>
          <img src={master} alt="master" style={{ marginLeft: '20px' }} />
          <img src={visa} alt="master" style={{ marginLeft: '20px' }} />
          <img src={verve} alt="master" style={{ marginLeft: '20px' }} />
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          &copy; 2021 ORAQL - All Rights Reserved, Privacy & Cookie Policy
        </p>
      </Footer>
    </Layout>
  )
}

export default MajorCountry
