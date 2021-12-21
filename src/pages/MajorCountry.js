import { Breadcrumb, Layout, Menu, Card, Image, Typography } from 'antd'
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

const { Title } = Typography
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const gridStyle = {
  width: '97px',
  textAlign: 'center',
  margin: '10px',
  height: '130px',
  padding: '10px',
  backgroundColor: '#fff',
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
                height: '100%',
                fontSize: '19px',
                fontFamily: 'Merriweather',
              }}
              className={styles.siderHead}
            >
              <SubMenu key="sub1" title="Football">
                {/* <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item> */}
              </SubMenu>
              <SubMenu key="sub2" title="Basketball">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="American Football">
                <Menu.Item key="9">option9</Menu.Item>
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
              padding: '0 24px',
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
            <div>
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
                    <p>National League North</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={south} />
                    <p>National League South</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={DL} />
                    {/* <p>Professional Development League</p> */}
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>
                    <Image src={U18} />
                    <p>U-18 Premier League</p>
                  </Card.Grid>
                </Card>
              </div>
            </div>
            <div>
              Voluptua lorem rebum justo at sit justo diam amet. Sadipscing kasd
              amet et accusam ea at dolores amet, et elitr nonumy lorem ipsum.
              Sea sit dolores takimata duo dolor sea rebum. Clita sed sed erat
              erat clita diam lorem dolores, stet amet justo ipsum diam accusam
              ipsum dolore, lorem vero.
            </div>
            <div>
              Voluptua lorem rebum justo at sit justo diam amet. Sadipscing kasd
              amet et accusam ea at dolores amet, et elitr nonumy lorem ipsum.
              Sea sit dolores takimata duo dolor sea rebum. Clita sed sed erat
              erat clita diam lorem dolores, stet amet justo ipsum diam accusam
              ipsum dolore, lorem vero.
            </div>
            <div>
              Voluptua lorem rebum justo at sit justo diam amet. Sadipscing kasd
              amet et accusam ea at dolores amet, et elitr nonumy lorem ipsum.
              Sea sit dolores takimata duo dolor sea rebum. Clita sed sed erat
              erat clita diam lorem dolores, stet amet justo ipsum diam accusam
              ipsum dolore, lorem vero.
            </div>
            <div>
              Voluptua lorem rebum justo at sit justo diam amet. Sadipscing kasd
              amet et accusam ea at dolores amet, et elitr nonumy lorem ipsum.
              Sea sit dolores takimata duo dolor sea rebum. Clita sed sed erat
              erat clita diam lorem dolores, stet amet justo ipsum diam accusam
              ipsum dolore, lorem vero.
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
    </Layout>
  )
}

export default MajorCountry
